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
      var womanListHeight = document.getElementById("womanList").scrollHeight; // Added 100px to the bottom for padding -
      // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 2.5; //   document.body.style.height = womanListHeight + halfHeight + "px";

      console.log({
        womanListHeight: womanListHeight
      });
      var testHeight = womanListHeight;
      document.body.style.height = testHeight + "px";
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.f02307ce3b9eb7443d02.hot-update.js.map