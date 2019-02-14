webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/WomenList.js":
/*!****************************************!*\
  !*** ./components/styles/WomenList.js ***!
  \****************************************/
/*! exports provided: WomenListWrap, ContainerTop, Container, InnerWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenListWrap", function() { return WomenListWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTop", function() { return ContainerTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerWrap", function() { return InnerWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var WomenListWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "WomenList__WomenListWrap",
  componentId: "sc-18a2oqn-0"
})(["position:fixed;top:0;left:0;width:100%;height:100vh;-webkit-perspective:150px;perspective:150px;.womenWrapper{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;}.womanItem{width:100vw;outline:1px solid ", ";display:flex;justify-content:center;align-items:center;-webkit-transform:translate3d(0,0,0);h1{color:", ";text-transform:uppercase;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});
var ContainerTop = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "WomenList__ContainerTop",
  componentId: "sc-18a2oqn-1"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;transform:", ";"], function (props) {
  return props.transform ? " rotateY(".concat(props.transform.y, ") rotateX(").concat(props.transform.x, ")\n        ") : "rotatex(30deg)";
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "WomenList__Container",
  componentId: "sc-18a2oqn-2"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;"]);
var InnerWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "WomenList__InnerWrap",
  componentId: "sc-18a2oqn-3"
})(["margin-top:", ";transform:", ";"], function (props) {
  return props.order ? "calc((-100vh / 3) * ".concat(props.order, ");") : "0";
}, function (props) {
  return props.scroll ? "translate3d(0px, -".concat(props.scroll, "px, 0px)") : null;
});

/***/ })

})
//# sourceMappingURL=index.js.d520a1709d53b09a8a7b.hot-update.js.map