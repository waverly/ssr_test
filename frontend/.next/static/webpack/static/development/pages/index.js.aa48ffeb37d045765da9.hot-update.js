webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WomenList.js":
/*!*********************************!*\
  !*** ./components/WomenList.js ***!
  \*********************************/
/*! exports provided: WomenList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenList", function() { return WomenList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/WomenList.js";


var ContainerWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerWrap",
  componentId: "jxv8bs-0"
})(["position:fixed;top:0;left:0;width:100%;height:100vh;-webkit-perspective:150px;perspective:150px;.womanItem{width:100vw;outline:1px solid ", ";display:flex;justify-content:center;align-items:center;h1{color:", ";text-transform:uppercase;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});
var ContainerTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerTop",
  componentId: "jxv8bs-1"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid red;.womenWrapper{transform:translate3d(0px,-1710px,0px);}"]);
var ContainerMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerMiddle",
  componentId: "jxv8bs-2"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid blue;.womenWrapper{margin-top:calc(-100vh / 3);transform:translate3d(0px,-1710px,0px);}"]);
var ContainerBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerBottom",
  componentId: "jxv8bs-3"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;.womenWrapper{transform:translate3d(0px,-1710px,0px);margin-top:calc((-100vh / 3) * 2);}"]);

var calcX = function calcX(x) {
  if (typeof window === "undefined") {
    return 0;
  } else {
    // measure centerpoint
    var winWidth = window.innerWidth;
    var center = winWidth / 2;
    var distFromCenter = x - center;
    var decimal = distFromCenter / center;
  }
};

var WomenList = function WomenList(_ref) {
  var women = _ref.women,
      x = _ref.x,
      y = _ref.y;

  if (women) {
    var allWomen = women.map(function (woman) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "womanItem",
        key: woman.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, woman.name));
    });

    if (typeof window !== "undefined") {
      var womanListHeight = document.getElementById("womanList").offsetHeight;
      document.body.offsetHeight = womanListHeight;
      console.log(womanListHeight);
    }

    var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerWrap, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTop, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "womanList",
      className: "womenWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, " ", allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerMiddle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "womenWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, " ", allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerBottom, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "womenWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, " ", allWomen)));
    return containers;
  } else return null;
};

/***/ })

})
//# sourceMappingURL=index.js.aa48ffeb37d045765da9.hot-update.js.map