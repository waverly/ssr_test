webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ShareStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ShareStyles */ "./components/styles/ShareStyles.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/Share.js";



var Share = function Share(props) {
  if (props.woman) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ShareStyles__WEBPACK_IMPORTED_MODULE_1__["ShareContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Thanks for adding ", props.woman.name, " to the list! Share it with her:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.northkingdom.com/".concat(props.woman.newElId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "https://www.northkingdom.com/".concat(props.woman.newElId)));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ })

})
//# sourceMappingURL=index.js.4e9fae3e8d52f8ade8bb.hot-update.js.map