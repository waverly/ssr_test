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
      //   console.log("set body height is running");
      //   const womanListHeight = document.getElementById("womanList").scrollHeight;
      //   // Added 100px to the bottom for padding -
      //   // TODO: adjust bottom padding for responsive
      //   // calculate half of window height and add to women's list
      //   const halfHeight = window.innerHeight / 2.5;
      //   //   document.body.style.height = womanListHeight + halfHeight + "px";
      //   console.log(`woman list height is ${womanListHeight}`);
      //   const testHeight = 15000;
      //   document.body.style.height = "15000px";
      window.scrollTo(0, 0);
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.cf7399d817db97c9b7cf.hot-update.js.map