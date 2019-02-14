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


var WomanWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__WomanWrapper",
  componentId: "jxv8bs-0"
})(["width:100vw;padding:100px;outline:1px solid ", ";display:flex;justify-content:center;align-items:center;transform:matrix3d( 0.8535533905932737,0.4999999999999999,0.14644660940672619,0,-0.4999999999999999,0.7071067811865476,0.4999999999999999,0,0.14644660940672619,-0.4999999999999999,0.8535533905932737,0,22.62994231491119,-20.3223304703363,101.3700576850888,1 );h1{color:", ";}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WomanWrapper, {
        skewX: calcX(x),
        key: woman.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, woman.name));
    });
    return allWomen;
  } else return null;
};

/***/ })

})
//# sourceMappingURL=index.js.f7c38fc22f7235f41238.hot-update.js.map