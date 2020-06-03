webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _ApplyTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplyTheme */ \"./pages/ApplyTheme.js\");\n/* harmony import */ var _component_NavView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/NavView */ \"./pages/component/NavView.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ted/bitlocal/meetlivepromotion/meetlivepromotion/pages/product.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar pages = [function (_ref) {\n  var style = _ref.style;\n  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      background: \"lightpink\",\n      height: \"100%\",\n      position: \"absolute\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"A\");\n}, function (_ref2) {\n  var style = _ref2.style;\n  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      background: \"lightblue\",\n      position: \"absolute\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: \"https://meetlive.s3.ap-northeast-2.amazonaws.com/part1.jpg\",\n    sx: {\n      width: [\"100%\", \"50%\"],\n      borderRadius: 8\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n}, function (_ref3) {\n  var style = _ref3.style;\n  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      background: \"lightgreen\",\n      position: \"absolute\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, \"C\");\n}];\nfunction App(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      set = _useState[1];\n\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    return set(function (state) {\n      return (state + 1) % 3;\n    });\n  }, []);\n  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useTransition\"])(index, function (p) {\n    return p;\n  }, {\n    from: {\n      opacity: 0,\n      transform: \"translate3d(100%,0,0)\"\n    },\n    enter: {\n      opacity: 1,\n      transform: \"translate3d(0%,0,0)\"\n    },\n    leave: {\n      opacity: 0,\n      transform: \"translate3d(-50%,0,0)\"\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_ApplyTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(_component_NavView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    p: 5,\n    fontSize: 4,\n    color: \"white\",\n    bg: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    color: \"#484848\",\n    fontWeight: \"900\",\n    fontSize: [5, 5, 5],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"WebRTC \\uC194\\uB8E8\\uC158.\"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    color: \"#484848\",\n    fontWeight: \"400\",\n    fontSize: [2, 2, 2],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"\\uC81C\\uD488 \\uC0C1\\uC138 \\uC124\\uBA85.\"))), __jsx(\"iframe\", {\n    src: \"https://docs.google.com/viewerng/viewer?url=https://meetlive.s3.ap-northeast-2.amazonaws.com/part.pdf&embedded=true\",\n    width: \"100%\",\n    height: \"100%\",\n    frameBorder: \"0\",\n    allow: \"fullscreen\",\n    allowFullScreen: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: {\n      width: \"100%\",\n      height: 0,\n      paddingBottom: 1200 / 16 + \"%\",\n      position: \"relative\",\n      overflow: \"hidden\",\n      \"& > iframe\": {\n        position: \"absolute\",\n        width: \"100%\",\n        height: \"100%\",\n        top: 0,\n        bottom: 0,\n        left: 0,\n        border: 0\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"simple-trans-main\",\n    onClick: onClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, transitions.map(function (_ref4) {\n    var item = _ref4.item,\n        props = _ref4.props,\n        key = _ref4.key;\n    var Page = pages[item];\n    return __jsx(Page, {\n      key: key,\n      style: props,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 20\n      }\n    });\n  }))));\n}\n\n_s(App, \"Lu25WPmz/Alr2wes6FWBkXtkJxU=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useTransition\"]];\n});\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0LmpzP2JhMWMiXSwibmFtZXMiOlsicGFnZXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiQXBwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0Iiwib25DbGljayIsInVzZUNhbGxiYWNrIiwic3RhdGUiLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJwIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJlbnRlciIsImxlYXZlIiwicGFkZGluZ0JvdHRvbSIsIm92ZXJmbG93IiwidG9wIiwiYm90dG9tIiwibGVmdCIsImJvcmRlciIsIm1hcCIsIml0ZW0iLCJrZXkiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxrQ0FDQUEsS0FEQTtBQUVIQyxnQkFBVSxFQUFFLFdBRlQ7QUFHSEMsWUFBTSxFQUFFLE1BSEw7QUFJSEMsY0FBUSxFQUFFO0FBSlAsTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQSxDQURZLEVBYVo7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxrQ0FBT0EsS0FBUDtBQUFjQyxnQkFBVSxFQUFFLFdBQTFCO0FBQXVDRSxjQUFRLEVBQUU7QUFBakQsTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQyw0Q0FBRDtBQUNFLE9BQUcsRUFBQyw0REFETjtBQUVFLE1BQUUsRUFBRTtBQUNGQyxXQUFLLEVBQUUs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TUFGSztBQUdaRixjQUFNLEVBQUUsTUFISTtBQUlac0IsV0FBRyxFQUFFLENBSk87QUFLWkMsY0FBTSxFQUFFLENBTEk7QUFNWkMsWUFBSSxFQUFFLENBTk07QUFPWkMsY0FBTSxFQUFFO0FBUEk7QUFOWixLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQkU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBbUMsV0FBTyxFQUFFaEIsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxXQUFXLENBQUNjLEdBQVosQ0FBZ0IsaUJBQTBCO0FBQUEsUUFBdkJDLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLFFBQWpCdEIsS0FBaUIsU0FBakJBLEtBQWlCO0FBQUEsUUFBVnVCLEdBQVUsU0FBVkEsR0FBVTtBQUN6QyxRQUFNQyxJQUFJLEdBQUdoQyxLQUFLLENBQUM4QixJQUFELENBQWxCO0FBQ0EsV0FBTyxNQUFDLElBQUQ7QUFBTSxTQUFHLEVBQUVDLEdBQVg7QUFBZ0IsV0FBSyxFQUFFdkIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FIQSxDQURILENBbEJGLENBdEJGLENBREY7QUFrREQ7O0dBM0R1QkQsRztVQUdGUywwRDs7O0tBSEVULEciLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgRmxleCwgTGluaywgQnV0dG9uIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IEFwcGx5VGhlbWUgZnJvbSBcIi4vQXBwbHlUaGVtZVwiO1xuaW1wb3J0IE5hdlZpZXcgZnJvbSBcIi4vY29tcG9uZW50L05hdlZpZXdcIjtcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuXG5jb25zdCBwYWdlcyA9IFtcbiAgKHsgc3R5bGUgfSkgPT4gKFxuICAgIDxhbmltYXRlZC5kaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpZ2h0cGlua1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICBBXG4gICAgPC9hbmltYXRlZC5kaXY+XG4gICksXG4gICh7IHN0eWxlIH0pID0+IChcbiAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9XCJodHRwczovL21lZXRsaXZlLnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vcGFydDEuanBnXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjUwJVwiXSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApLFxuICAoeyBzdHlsZSB9KSA9PiAoXG4gICAgPGFuaW1hdGVkLmRpdlxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIGJhY2tncm91bmQ6IFwibGlnaHRncmVlblwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19XG4gICAgPlxuICAgICAgQ1xuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0KChzdGF0ZSkgPT4gKHN0YXRlICsgMSkgJSAzKSwgW10pO1xuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oaW5kZXgsIChwKSA9PiBwLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMTAwJSwwLDApXCIgfSxcbiAgICBlbnRlcjogeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCUsMCwwKVwiIH0sXG4gICAgbGVhdmU6IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC01MCUsMCwwKVwiIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBseVRoZW1lPlxuICAgICAgICA8TmF2Vmlldz48L05hdlZpZXc+XG4gICAgICAgIDxCb3ggcD17NX0gZm9udFNpemU9ezR9IGNvbG9yPVwid2hpdGVcIiBiZz1cIlwiPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzQ4NDg0OFwiIGZvbnRXZWlnaHQ9XCI5MDBcIiBmb250U2l6ZT17WzUsIDUsIDVdfT5cbiAgICAgICAgICAgIFdlYlJUQyDshpTro6jshZguXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzQ4NDg0OFwiIGZvbnRXZWlnaHQ9XCI0MDBcIiBmb250U2l6ZT17WzIsIDIsIDJdfT5cbiAgICAgICAgICAgIOygnO2SiCDsg4HshLgg7ISk66qFLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0FwcGx5VGhlbWU+XG5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vdmlld2Vybmcvdmlld2VyP3VybD1odHRwczovL21lZXRsaXZlLnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vcGFydC5wZGYmZW1iZWRkZWQ9dHJ1ZVwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICBhbGxvdz1cImZ1bGxzY3JlZW5cIlxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgID48L2lmcmFtZT5cblxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMTIwMCAvIDE2ICsgXCIlXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBcIiYgPiBpZnJhbWVcIjoge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltcGxlLXRyYW5zLW1haW5cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7dHJhbnNpdGlvbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgUGFnZSA9IHBhZ2VzW2l0ZW1dO1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlIGtleT17a2V5fSBzdHlsZT17cHJvcHN9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product.js\n");

/***/ })

})