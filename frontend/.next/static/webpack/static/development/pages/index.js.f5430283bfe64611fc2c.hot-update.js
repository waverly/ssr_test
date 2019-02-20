webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/helpers/index.js":
/*!*************************************!*\
  !*** ./components/helpers/index.js ***!
  \*************************************/
/*! exports provided: setBodyHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyHeight", function() { return setBodyHeight; });
var setBodyHeight = function setBodyHeight() {
  console.log("inside set body height");

  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      var womanListHeight = document.getElementById("womanList").offsetHeight; // Added 100px to the bottom for padding -
      // TODO: adjust for responsive

      document.body.style.height = womanListHeight + 100 + "px";
      console.log("there is a woman list and the height is ", womanListHeight);
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.f5430283bfe64611fc2c.hot-update.js.map