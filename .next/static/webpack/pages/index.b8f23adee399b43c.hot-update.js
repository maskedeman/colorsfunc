"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_Quantize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/Quantize */ \"./pages/home/Quantize.jsx\");\n/* harmony import */ var _home_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/ImageLoader */ \"./pages/home/ImageLoader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import { accountService } from \"@/_services\";\n\nconst Home = ()=>{\n    _s();\n    // const user = accountService.userValue;\n    const [pixels, setPixels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSetPixels = (event)=>{\n        setPixels(event);\n        console.log(\"Home invoked\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            id: \"c\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Hi \",\n                        user && user.userName,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"par\",\n                    children: [\n                        \"Upload an image below from which you want the\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: \"colGrad\",\n                            children: \"Color\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 44\n                        }, undefined),\n                        \"palettes.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"up\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    children: \"Upload File\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"browse\",\n                    children: \"To upload file click “+”\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: \"8px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ImageLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            setPixels: handleSetPixels\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_Quantize__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            pixels: pixels\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Aman\\\\projects\\\\apiInt\\\\portfolio\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"cJp+Vzu4XWx1Frn/nVjsR4ywj7s=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFSjtBQUNTO0FBQzdDLCtDQUErQztBQUNuQjtBQUU1QixNQUFNSSxPQUFPOztJQUNYLHlDQUF5QztJQUN6QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxNQUFNTSxrQkFBa0IsQ0FBQ0M7UUFDdkJGLFVBQVVFO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7WUFBWUMsSUFBRzs7OEJBQzVCLDhEQUFDQzs7d0JBQUc7d0JBQUlDLFFBQVFBLEtBQUtDLFFBQVE7d0JBQUM7Ozs7Ozs7Z0JBQU87OEJBRXJDLDhEQUFDQztvQkFBS0wsV0FBVTs7d0JBQU07d0JBQzBCO3NDQUM5Qyw4REFBQ007NEJBQUVOLFdBQVU7c0NBQVU7Ozs7Ozt3QkFBUztzQ0FBQyw4REFBQ087Ozs7O3dCQUFLOzs7Ozs7OzhCQUd6Qyw4REFBQ1I7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ1E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0g7b0JBQUtMLFdBQVU7OEJBQVM7Ozs7Ozs4QkFDekIsOERBQUNEO29CQUFJVSxPQUFPO3dCQUFFQyxTQUFTO29CQUFNOztzQ0FDM0IsOERBQUNuQix5REFBV0E7NEJBQUNHLFdBQVdDOzs7Ozs7c0NBRXhCLDhEQUFDTCxzREFBS0E7NEJBQUNHLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQTlCTUQ7S0FBQUE7QUFnQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBRdWFudCBmcm9tIFwiLi9ob21lL1F1YW50aXplXCI7XHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tIFwiLi9ob21lL0ltYWdlTG9hZGVyXCI7XHJcbi8vaW1wb3J0IHsgYWNjb3VudFNlcnZpY2UgfSBmcm9tIFwiQC9fc2VydmljZXNcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHVzZXIgPSBhY2NvdW50U2VydmljZS51c2VyVmFsdWU7XHJcbiAgY29uc3QgW3BpeGVscywgc2V0UGl4ZWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0UGl4ZWxzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRQaXhlbHMoZXZlbnQpO1xyXG4gICAgY29uc29sZS5sb2coXCJIb21lIGludm9rZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNcIj5cclxuICAgICAgICA8aDE+SGkge3VzZXIgJiYgdXNlci51c2VyTmFtZX0hPC9oMT57XCIgXCJ9XHJcbiAgICAgICAgey8qIEFkZCBhIGNvbmRpdGlvbmFsIGNoZWNrIGJlZm9yZSBhY2Nlc3NpbmcgdXNlci51c2VyTmFtZSAqL31cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYXJcIj5cclxuICAgICAgICAgIFVwbG9hZCBhbiBpbWFnZSBiZWxvdyBmcm9tIHdoaWNoIHlvdSB3YW50IHRoZXtcIiBcIn1cclxuICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNvbEdyYWRcIj5Db2xvcjwvYj4gPGJyIC8+XHJcbiAgICAgICAgICBwYWxldHRlcy5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cFwiPjwvZGl2PlxyXG4gICAgICAgIDxoNj5VcGxvYWQgRmlsZTwvaDY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJvd3NlXCI+VG8gdXBsb2FkIGZpbGUgY2xpY2sg4oCcK+KAnTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICA8SW1hZ2VMb2FkZXIgc2V0UGl4ZWxzPXtoYW5kbGVTZXRQaXhlbHN9IC8+XHJcblxyXG4gICAgICAgICAgPFF1YW50IHBpeGVscz17cGl4ZWxzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlF1YW50IiwiSW1hZ2VMb2FkZXIiLCJIb21lIiwicGl4ZWxzIiwic2V0UGl4ZWxzIiwiaGFuZGxlU2V0UGl4ZWxzIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsInVzZXIiLCJ1c2VyTmFtZSIsInNwYW4iLCJiIiwiYnIiLCJoNiIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});