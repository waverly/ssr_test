webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WomenList.js":
/*!*********************************!*\
  !*** ./components/WomenList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/WomenList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



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
  }
};

var WomenList =
/*#__PURE__*/
function (_Component) {
  _inherits(WomenList, _Component);

  function WomenList() {
    _classCallCheck(this, WomenList);

    return _possibleConstructorReturn(this, _getPrototypeOf(WomenList).apply(this, arguments));
  }

  _createClass(WomenList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        if (document.getElementById("womanList")) {
          console.log("el exists");
          var womanListHeight = document.getElementById("womanList").offsetHeight;
          document.body.style.height = womanListHeight + "px";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.women) {
        var allWomen = this.props.women.map(function (woman) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "womanItem",
            key: woman.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, woman.name));
        });
        var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerWrap, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTop, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "womanList",
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerMiddle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, " ", allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerBottom, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, " ", allWomen)));
        return containers;
      } else return null;
    }
  }]);

  return WomenList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WomenList);

/***/ })

})
//# sourceMappingURL=index.js.87582103de5fbe16475f.hot-update.js.map