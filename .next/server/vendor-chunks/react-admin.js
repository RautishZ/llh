"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-admin";
exports.ids = ["vendor-chunks/react-admin"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-admin/dist/esm/Admin.js":
/*!****************************************************!*\
  !*** ./node_modules/react-admin/dist/esm/Admin.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Admin: () => (/* binding */ Admin),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ra_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ra-core */ \"(ssr)/./node_modules/ra-core/dist/esm/store/localStorageStore.js\");\n/* harmony import */ var ra_ui_materialui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ra-ui-materialui */ \"(ssr)/./node_modules/ra-ui-materialui/dist/esm/AdminContext.js\");\n/* harmony import */ var ra_ui_materialui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ra-ui-materialui */ \"(ssr)/./node_modules/ra-ui-materialui/dist/esm/AdminUI.js\");\n/* harmony import */ var _defaultI18nProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultI18nProvider */ \"(ssr)/./node_modules/react-admin/dist/esm/defaultI18nProvider.js\");\n\n\n\n\nvar defaultStore = (0,ra_core__WEBPACK_IMPORTED_MODULE_1__.localStorageStore)();\n/**\n * Main admin component, entry point to the application.\n *\n * Initializes the various contexts (auth, data, i18n, router)\n * and defines the main routes.\n *\n * Expects a list of resources as children, or a function returning a list of\n * resources based on the permissions.\n *\n * @example\n *\n * // static list of resources\n *\n * import {\n *     Admin,\n *     Resource,\n *     ListGuesser,\n *     useDataProvider,\n * } from 'react-admin';\n *\n * const App = () => (\n *     <Admin dataProvider={myDataProvider}>\n *         <Resource name=\"posts\" list={ListGuesser} />\n *     </Admin>\n * );\n *\n * // dynamic list of resources based on permissions\n *\n * import {\n *     Admin,\n *     Resource,\n *     ListGuesser,\n *     useDataProvider,\n * } from 'react-admin';\n *\n * const App = () => (\n *     <Admin dataProvider={myDataProvider}>\n *         {permissions => [\n *             <Resource name=\"posts\" key=\"posts\" list={ListGuesser} />,\n *         ]}\n *     </Admin>\n * );\n *\n * // If you have to build a dynamic list of resources using a side effect,\n * // you can't use <Admin>. But as it delegates to sub components,\n * // it's relatively straightforward to replace it:\n *\n * import * as React from 'react';\nimport { useEffect, useState } from 'react';\n * import {\n *     AdminContext,\n *     AdminUI,\n *     defaultI18nProvider,\n *     localStorageStore,\n *     Resource,\n *     ListGuesser,\n *     useDataProvider,\n * } from 'react-admin';\n *\n * const store = localStorageStore();\n *\n * const App = () => (\n *     <AdminContext dataProvider={myDataProvider} i18nProvider={defaultI18nProvider} store={store}>\n *         <Resources />\n *     </AdminContext>\n * );\n *\n * const Resources = () => {\n *     const [resources, setResources] = useState([]);\n *     const dataProvider = useDataProvider();\n *     useEffect(() => {\n *         dataProvider.introspect().then(r => setResources(r));\n *     }, []);\n *\n *     return (\n *         <AdminUI>\n *             {resources.map(resource => (\n *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />\n *             ))}\n *         </AdminUI>\n *     );\n * };\n */\nvar Admin = function (props) {\n    var authProvider = props.authProvider, basename = props.basename, catchAll = props.catchAll, children = props.children, dashboard = props.dashboard, dataProvider = props.dataProvider, disableTelemetry = props.disableTelemetry, history = props.history, _a = props.i18nProvider, i18nProvider = _a === void 0 ? _defaultI18nProvider__WEBPACK_IMPORTED_MODULE_2__.defaultI18nProvider : _a, layout = props.layout, loading = props.loading, loginPage = props.loginPage, authCallbackPage = props.authCallbackPage, menu = props.menu, // deprecated, use a custom layout instead\n    notification = props.notification, queryClient = props.queryClient, requireAuth = props.requireAuth, _b = props.store, store = _b === void 0 ? defaultStore : _b, ready = props.ready, theme = props.theme, lightTheme = props.lightTheme, darkTheme = props.darkTheme, defaultTheme = props.defaultTheme, _c = props.title, title = _c === void 0 ? 'React Admin' : _c;\n    if (loginPage === true && \"development\" !== 'production') {\n        console.warn('You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it');\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ra_ui_materialui__WEBPACK_IMPORTED_MODULE_3__.AdminContext, { authProvider: authProvider, basename: basename, dataProvider: dataProvider, i18nProvider: i18nProvider, store: store, history: history, queryClient: queryClient, theme: theme, lightTheme: lightTheme, darkTheme: darkTheme, defaultTheme: defaultTheme },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ra_ui_materialui__WEBPACK_IMPORTED_MODULE_4__.AdminUI, { layout: layout, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, title: title, loading: loading, loginPage: loginPage, authCallbackPage: authCallbackPage, notification: notification, requireAuth: requireAuth, ready: ready }, children)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);\n//# sourceMappingURL=Admin.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRtaW4vZGlzdC9lc20vQWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDYTtBQUNjO0FBQ0U7QUFDNUQsbUJBQW1CLDBEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQyxZQUFZO0FBQ1osd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0IsY0FBYyxxQkFBcUIsT0FBTyxNQUFNO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUNBQW1DLGVBQWUsS0FBSyxjQUFjLE1BQU0sYUFBYTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx3VEFBd1QscUVBQW1CO0FBQzNVO0FBQ0EsOEJBQThCLGFBQW9CO0FBQ2xEO0FBQ0E7QUFDQSxZQUFZLGdEQUFtQixDQUFDLDBEQUFZLElBQUksMFBBQTBQO0FBQzFTLFFBQVEsZ0RBQW1CLENBQUMscURBQU8sSUFBSSx3UUFBd1E7QUFDL1M7QUFDQSxpRUFBZSxLQUFLLEVBQUM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdW9saW5nby1jbG9uZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hZG1pbi9kaXN0L2VzbS9BZG1pbi5qcz83NzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSAncmEtY29yZSc7XG5pbXBvcnQgeyBBZG1pblVJLCBBZG1pbkNvbnRleHQsIH0gZnJvbSAncmEtdWktbWF0ZXJpYWx1aSc7XG5pbXBvcnQgeyBkZWZhdWx0STE4blByb3ZpZGVyIH0gZnJvbSAnLi9kZWZhdWx0STE4blByb3ZpZGVyJztcbnZhciBkZWZhdWx0U3RvcmUgPSBsb2NhbFN0b3JhZ2VTdG9yZSgpO1xuLyoqXG4gKiBNYWluIGFkbWluIGNvbXBvbmVudCwgZW50cnkgcG9pbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEluaXRpYWxpemVzIHRoZSB2YXJpb3VzIGNvbnRleHRzIChhdXRoLCBkYXRhLCBpMThuLCByb3V0ZXIpXG4gKiBhbmQgZGVmaW5lcyB0aGUgbWFpbiByb3V0ZXMuXG4gKlxuICogRXhwZWN0cyBhIGxpc3Qgb2YgcmVzb3VyY2VzIGFzIGNoaWxkcmVuLCBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBhIGxpc3Qgb2ZcbiAqIHJlc291cmNlcyBiYXNlZCBvbiB0aGUgcGVybWlzc2lvbnMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBzdGF0aWMgbGlzdCBvZiByZXNvdXJjZXNcbiAqXG4gKiBpbXBvcnQge1xuICogICAgIEFkbWluLFxuICogICAgIFJlc291cmNlLFxuICogICAgIExpc3RHdWVzc2VyLFxuICogICAgIHVzZURhdGFQcm92aWRlcixcbiAqIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuICpcbiAqIGNvbnN0IEFwcCA9ICgpID0+IChcbiAqICAgICA8QWRtaW4gZGF0YVByb3ZpZGVyPXtteURhdGFQcm92aWRlcn0+XG4gKiAgICAgICAgIDxSZXNvdXJjZSBuYW1lPVwicG9zdHNcIiBsaXN0PXtMaXN0R3Vlc3Nlcn0gLz5cbiAqICAgICA8L0FkbWluPlxuICogKTtcbiAqXG4gKiAvLyBkeW5hbWljIGxpc3Qgb2YgcmVzb3VyY2VzIGJhc2VkIG9uIHBlcm1pc3Npb25zXG4gKlxuICogaW1wb3J0IHtcbiAqICAgICBBZG1pbixcbiAqICAgICBSZXNvdXJjZSxcbiAqICAgICBMaXN0R3Vlc3NlcixcbiAqICAgICB1c2VEYXRhUHJvdmlkZXIsXG4gKiB9IGZyb20gJ3JlYWN0LWFkbWluJztcbiAqXG4gKiBjb25zdCBBcHAgPSAoKSA9PiAoXG4gKiAgICAgPEFkbWluIGRhdGFQcm92aWRlcj17bXlEYXRhUHJvdmlkZXJ9PlxuICogICAgICAgICB7cGVybWlzc2lvbnMgPT4gW1xuICogICAgICAgICAgICAgPFJlc291cmNlIG5hbWU9XCJwb3N0c1wiIGtleT1cInBvc3RzXCIgbGlzdD17TGlzdEd1ZXNzZXJ9IC8+LFxuICogICAgICAgICBdfVxuICogICAgIDwvQWRtaW4+XG4gKiApO1xuICpcbiAqIC8vIElmIHlvdSBoYXZlIHRvIGJ1aWxkIGEgZHluYW1pYyBsaXN0IG9mIHJlc291cmNlcyB1c2luZyBhIHNpZGUgZWZmZWN0LFxuICogLy8geW91IGNhbid0IHVzZSA8QWRtaW4+LiBCdXQgYXMgaXQgZGVsZWdhdGVzIHRvIHN1YiBjb21wb25lbnRzLFxuICogLy8gaXQncyByZWxhdGl2ZWx5IHN0cmFpZ2h0Zm9yd2FyZCB0byByZXBsYWNlIGl0OlxuICpcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4gKiBpbXBvcnQge1xuICogICAgIEFkbWluQ29udGV4dCxcbiAqICAgICBBZG1pblVJLFxuICogICAgIGRlZmF1bHRJMThuUHJvdmlkZXIsXG4gKiAgICAgbG9jYWxTdG9yYWdlU3RvcmUsXG4gKiAgICAgUmVzb3VyY2UsXG4gKiAgICAgTGlzdEd1ZXNzZXIsXG4gKiAgICAgdXNlRGF0YVByb3ZpZGVyLFxuICogfSBmcm9tICdyZWFjdC1hZG1pbic7XG4gKlxuICogY29uc3Qgc3RvcmUgPSBsb2NhbFN0b3JhZ2VTdG9yZSgpO1xuICpcbiAqIGNvbnN0IEFwcCA9ICgpID0+IChcbiAqICAgICA8QWRtaW5Db250ZXh0IGRhdGFQcm92aWRlcj17bXlEYXRhUHJvdmlkZXJ9IGkxOG5Qcm92aWRlcj17ZGVmYXVsdEkxOG5Qcm92aWRlcn0gc3RvcmU9e3N0b3JlfT5cbiAqICAgICAgICAgPFJlc291cmNlcyAvPlxuICogICAgIDwvQWRtaW5Db250ZXh0PlxuICogKTtcbiAqXG4gKiBjb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XG4gKiAgICAgY29uc3QgW3Jlc291cmNlcywgc2V0UmVzb3VyY2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAqICAgICBjb25zdCBkYXRhUHJvdmlkZXIgPSB1c2VEYXRhUHJvdmlkZXIoKTtcbiAqICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICogICAgICAgICBkYXRhUHJvdmlkZXIuaW50cm9zcGVjdCgpLnRoZW4ociA9PiBzZXRSZXNvdXJjZXMocikpO1xuICogICAgIH0sIFtdKTtcbiAqXG4gKiAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPEFkbWluVUk+XG4gKiAgICAgICAgICAgICB7cmVzb3VyY2VzLm1hcChyZXNvdXJjZSA9PiAoXG4gKiAgICAgICAgICAgICAgICAgPFJlc291cmNlIG5hbWU9e3Jlc291cmNlLm5hbWV9IGtleT17cmVzb3VyY2Uua2V5fSBsaXN0PXtMaXN0R3Vlc3Nlcn0gLz5cbiAqICAgICAgICAgICAgICkpfVxuICogICAgICAgICA8L0FkbWluVUk+XG4gKiAgICAgKTtcbiAqIH07XG4gKi9cbmV4cG9ydCB2YXIgQWRtaW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYXV0aFByb3ZpZGVyID0gcHJvcHMuYXV0aFByb3ZpZGVyLCBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lLCBjYXRjaEFsbCA9IHByb3BzLmNhdGNoQWxsLCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBkYXNoYm9hcmQgPSBwcm9wcy5kYXNoYm9hcmQsIGRhdGFQcm92aWRlciA9IHByb3BzLmRhdGFQcm92aWRlciwgZGlzYWJsZVRlbGVtZXRyeSA9IHByb3BzLmRpc2FibGVUZWxlbWV0cnksIGhpc3RvcnkgPSBwcm9wcy5oaXN0b3J5LCBfYSA9IHByb3BzLmkxOG5Qcm92aWRlciwgaTE4blByb3ZpZGVyID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRJMThuUHJvdmlkZXIgOiBfYSwgbGF5b3V0ID0gcHJvcHMubGF5b3V0LCBsb2FkaW5nID0gcHJvcHMubG9hZGluZywgbG9naW5QYWdlID0gcHJvcHMubG9naW5QYWdlLCBhdXRoQ2FsbGJhY2tQYWdlID0gcHJvcHMuYXV0aENhbGxiYWNrUGFnZSwgbWVudSA9IHByb3BzLm1lbnUsIC8vIGRlcHJlY2F0ZWQsIHVzZSBhIGN1c3RvbSBsYXlvdXQgaW5zdGVhZFxuICAgIG5vdGlmaWNhdGlvbiA9IHByb3BzLm5vdGlmaWNhdGlvbiwgcXVlcnlDbGllbnQgPSBwcm9wcy5xdWVyeUNsaWVudCwgcmVxdWlyZUF1dGggPSBwcm9wcy5yZXF1aXJlQXV0aCwgX2IgPSBwcm9wcy5zdG9yZSwgc3RvcmUgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdFN0b3JlIDogX2IsIHJlYWR5ID0gcHJvcHMucmVhZHksIHRoZW1lID0gcHJvcHMudGhlbWUsIGxpZ2h0VGhlbWUgPSBwcm9wcy5saWdodFRoZW1lLCBkYXJrVGhlbWUgPSBwcm9wcy5kYXJrVGhlbWUsIGRlZmF1bHRUaGVtZSA9IHByb3BzLmRlZmF1bHRUaGVtZSwgX2MgPSBwcm9wcy50aXRsZSwgdGl0bGUgPSBfYyA9PT0gdm9pZCAwID8gJ1JlYWN0IEFkbWluJyA6IF9jO1xuICAgIGlmIChsb2dpblBhZ2UgPT09IHRydWUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBwYXNzZWQgdHJ1ZSB0byB0aGUgbG9naW5QYWdlIHByb3AuIFlvdSBtdXN0IGVpdGhlciBwYXNzIGZhbHNlIHRvIGRpc2FibGUgaXQgb3IgYSBjb21wb25lbnQgY2xhc3MgdG8gY3VzdG9taXplIGl0Jyk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChBZG1pbkNvbnRleHQsIHsgYXV0aFByb3ZpZGVyOiBhdXRoUHJvdmlkZXIsIGJhc2VuYW1lOiBiYXNlbmFtZSwgZGF0YVByb3ZpZGVyOiBkYXRhUHJvdmlkZXIsIGkxOG5Qcm92aWRlcjogaTE4blByb3ZpZGVyLCBzdG9yZTogc3RvcmUsIGhpc3Rvcnk6IGhpc3RvcnksIHF1ZXJ5Q2xpZW50OiBxdWVyeUNsaWVudCwgdGhlbWU6IHRoZW1lLCBsaWdodFRoZW1lOiBsaWdodFRoZW1lLCBkYXJrVGhlbWU6IGRhcmtUaGVtZSwgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWUgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZG1pblVJLCB7IGxheW91dDogbGF5b3V0LCBkYXNoYm9hcmQ6IGRhc2hib2FyZCwgZGlzYWJsZVRlbGVtZXRyeTogZGlzYWJsZVRlbGVtZXRyeSwgbWVudTogbWVudSwgY2F0Y2hBbGw6IGNhdGNoQWxsLCB0aXRsZTogdGl0bGUsIGxvYWRpbmc6IGxvYWRpbmcsIGxvZ2luUGFnZTogbG9naW5QYWdlLCBhdXRoQ2FsbGJhY2tQYWdlOiBhdXRoQ2FsbGJhY2tQYWdlLCBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbiwgcmVxdWlyZUF1dGg6IHJlcXVpcmVBdXRoLCByZWFkeTogcmVhZHkgfSwgY2hpbGRyZW4pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRtaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BZG1pbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-admin/dist/esm/Admin.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-admin/dist/esm/defaultI18nProvider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-admin/dist/esm/defaultI18nProvider.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultI18nProvider: () => (/* binding */ defaultI18nProvider)\n/* harmony export */ });\n/* harmony import */ var ra_language_english__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ra-language-english */ \"(ssr)/./node_modules/ra-language-english/dist/esm/index.js\");\n/* harmony import */ var ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ra-i18n-polyglot */ \"(ssr)/./node_modules/ra-i18n-polyglot/dist/esm/index.js\");\n\n\nvar defaultI18nProvider = (0,ra_i18n_polyglot__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () { return ra_language_english__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }, 'en', [{ name: 'en', value: 'English' }], { allowMissing: true });\n//# sourceMappingURL=defaultI18nProvider.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRtaW4vZGlzdC9lc20vZGVmYXVsdEkxOG5Qcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDRTtBQUM3QywwQkFBMEIsNERBQW9CLGVBQWUsT0FBTywyREFBZSxHQUFHLFdBQVcsOEJBQThCLEtBQUssb0JBQW9CO0FBQy9KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHVvbGluZ28tY2xvbmUvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRtaW4vZGlzdC9lc20vZGVmYXVsdEkxOG5Qcm92aWRlci5qcz9jMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAncmEtbGFuZ3VhZ2UtZW5nbGlzaCc7XG5pbXBvcnQgcG9seWdsb3RJMThuUHJvdmlkZXIgZnJvbSAncmEtaTE4bi1wb2x5Z2xvdCc7XG5leHBvcnQgdmFyIGRlZmF1bHRJMThuUHJvdmlkZXIgPSBwb2x5Z2xvdEkxOG5Qcm92aWRlcihmdW5jdGlvbiAoKSB7IHJldHVybiBkZWZhdWx0TWVzc2FnZXM7IH0sICdlbicsIFt7IG5hbWU6ICdlbicsIHZhbHVlOiAnRW5nbGlzaCcgfV0sIHsgYWxsb3dNaXNzaW5nOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdEkxOG5Qcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-admin/dist/esm/defaultI18nProvider.js\n");

/***/ })

};
;