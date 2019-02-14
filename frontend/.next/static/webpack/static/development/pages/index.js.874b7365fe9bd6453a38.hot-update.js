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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ContainerWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerWrap",
  componentId: "jxv8bs-0"
})(["position:fixed;top:0;left:0;width:100%;height:100vh;-webkit-perspective:150px;perspective:150px;.womenWrapper{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;}.womanItem{width:100vw;outline:1px solid ", ";display:flex;justify-content:center;align-items:center;-webkit-transform:translate3d(0,0,0);h1{color:", ";text-transform:uppercase;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});
var ContainerTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerTop",
  componentId: "jxv8bs-1"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid red;"]);
var ContainerMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerMiddle",
  componentId: "jxv8bs-2"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid blue;"]);
var ContainerBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__ContainerBottom",
  componentId: "jxv8bs-3"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;"]);
var InnerWrapTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__InnerWrapTop",
  componentId: "jxv8bs-4"
})(["transform:", ";"], function (props) {
  return props.scroll ? "translate3d(0px, -".concat(props.scroll, "px, 0px)") : null;
});
var InnerWrapMiddle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__InnerWrapMiddle",
  componentId: "jxv8bs-5"
})(["margin-top:calc(-100vh / 3);transform:", ";"], function (props) {
  return props.scroll ? "translate3d(0px, -".concat(props.scroll, "px, 0px)") : null;
});
var InnerWrapBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WomenList__InnerWrapBottom",
  componentId: "jxv8bs-6"
})(["margin-top:calc((-100vh / 3) * 2);transform:", ";"], function (props) {
  return props.scroll ? "translate3d(0px, -".concat(props.scroll, "px, 0px)") : null;
});

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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WomenList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WomenList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      scrollTop: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollCounter", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      var bodyScrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; // console.log(bodyScrollTop);

      _this.scrollCounter += 1;
      console.log(_this.scrollCounter);

      _this.setState({
        scrollTop: _this.scrollCounter
      });

      console.log(_this.state.scrollCounter);
    });

    return _this;
  }

  _createClass(WomenList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        if (document.getElementById("womanList")) {
          var womanListHeight = document.getElementById("womanList").offsetHeight;
          document.body.style.height = womanListHeight + "px";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        // console.log("there is a window");
        document.addEventListener("scroll", this._onScroll);
      }

      console.log("this.scrolltop is , ", this.scrollCounter);

      if (this.props.women) {
        var allWomen = this.props.women.map(function (woman) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "womanItem",
            key: woman.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, woman.name));
        });
        var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerWrap, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerTop, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerWrapTop, {
          scroll: this.state.scrollTop,
          id: "womanList",
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerMiddle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerWrapMiddle //   scroll={this.props.scroll}
        , {
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerBottom, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerWrapBottom //   scroll={this.props.scroll}
        , {
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, allWomen)));
        return containers;
      } else return null;
    }
  }]);

  return WomenList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WomenList);

/***/ })

})
//# sourceMappingURL=index.js.874b7365fe9bd6453a38.hot-update.js.map