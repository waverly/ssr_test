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
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      console.log("set body height is running");
      var womanListHeight = document.getElementById("womanList").offsetHeight; // Added 100px to the bottom for padding -
      // TODO: adjust for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 2.5;
      document.body.style.height = womanListHeight + halfHeight + "px";
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.ba49d1f59670c19ec9e3.hot-update.js.map