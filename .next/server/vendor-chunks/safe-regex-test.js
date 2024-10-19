"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-regex-test";
exports.ids = ["vendor-chunks/safe-regex-test"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"(ssr)/./node_modules/is-regex/index.js\");\n\nvar $exec = callBound('RegExp.prototype.exec');\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\n\nmodule.exports = function regexTester(regex) {\n\tif (!isRegex(regex)) {\n\t\tthrow new $TypeError('`regex` must be a RegExp');\n\t}\n\treturn function test(s) {\n\t\treturn $exec(regex, s) !== null;\n\t};\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1yZWdleC10ZXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHdFQUFxQjtBQUM3QyxjQUFjLG1CQUFPLENBQUMsd0RBQVU7O0FBRWhDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsOERBQWdCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHVvbGluZ28tY2xvbmUvLi9ub2RlX21vZHVsZXMvc2FmZS1yZWdleC10ZXN0L2luZGV4LmpzP2M1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGlzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG52YXIgJGV4ZWMgPSBjYWxsQm91bmQoJ1JlZ0V4cC5wcm90b3R5cGUuZXhlYycpO1xudmFyICRUeXBlRXJyb3IgPSByZXF1aXJlKCdlcy1lcnJvcnMvdHlwZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlZ2V4VGVzdGVyKHJlZ2V4KSB7XG5cdGlmICghaXNSZWdleChyZWdleCkpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYHJlZ2V4YCBtdXN0IGJlIGEgUmVnRXhwJyk7XG5cdH1cblx0cmV0dXJuIGZ1bmN0aW9uIHRlc3Qocykge1xuXHRcdHJldHVybiAkZXhlYyhyZWdleCwgcykgIT09IG51bGw7XG5cdH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-regex-test/index.js\n");

/***/ })

};
;