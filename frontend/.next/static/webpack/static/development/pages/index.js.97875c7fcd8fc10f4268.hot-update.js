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
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 2.5;
      console.log({
        halfHeight: halfHeight
      });
      document.body.style.height = womanListHeight + halfHeight + "px";
      console.log("there is a woman list and the height is ", womanListHeight);
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.97875c7fcd8fc10f4268.hot-update.js.map