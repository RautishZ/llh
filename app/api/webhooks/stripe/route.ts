import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";

import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error: unknown) {
    console.error(`Webhook error: ${error}`);
    return new NextResponse(`Webhook error ${JSON.stringify(error)}`, {
      status: 400,
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Handle user subscription completed event
  if (event.type === "checkout.session.completed") {
    const subscriptionId = session.subscription as string;

    if (!session.metadata?.userId) {
      return new NextResponse("User ID is required.", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    await db.insert(userSubscription).values({
      userId: session.metadata.userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscription.items.data[0].price.id,
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000), // Convert seconds to milliseconds
    });
  }

  // Handle user subscription renewal event
  if (event.type === "invoice.payment_succeeded") {
    const subscriptionId = session.subscription as string;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    await db
      .update(userSubscription)
      .set({
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000 // Convert seconds to milliseconds
        ),
      })
      .where(eq(userSubscription.stripeSubscriptionId, subscription.id));
  }

  // Handle other event types (optional logging)
  console.log(`Unhandled event type: ${event.type}`);

  return new NextResponse(null, { status: 200 });
}
