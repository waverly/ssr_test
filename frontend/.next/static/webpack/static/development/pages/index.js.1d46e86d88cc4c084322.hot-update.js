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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_WomenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/WomenList */ "./components/styles/WomenList.js");
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




 // x needs to always be

var calcX = function calcX(x) {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (x) {
      var center = window.innerWidth / 2;
      var distFromCenter = x - center;
      var decimal = distFromCenter / center; // number between .7 and .9

      var randVal = Math.floor(decimal * 0.9) + 0.7;
      console.log((x - window.innerWidth / 2) / 100);
      return (x - window.innerWidth / 2) / 100;
    } else return 30;
  }
};

var calcY = function calcY(y) {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (y) {
      var center = window.innerHeight / 2;
      var distFromCenter = y - center;
      return (y - window.innerHeight / 2) / 40;
    } else return 0;
  }
}; // t.clientX,
// t.clientY;
// var e = window.innerWidth
//   , i = window.innerHeight
//   , n = (t.clientX - e / 2) / 100
//   , r = (t.clientY - i / 2) / 10;
// console.log(n, r),
// TweenMax.to($(".item-top"), .5, {
//     rotationX: r,
//     ease: Power4.easeOut
// }),
// TweenMax.to($(".item-bottom"), .5, {
//     rotationX: r,
//     ease: Power4.easeOut
// }),
// TweenMax.to($(".main-container"), .5, {
//     rotationY: n,
//     ease: Power4.easeOut
// })


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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      console.log("runningonScroll");
      var bodyScrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      _this.setState({
        scrollTop: bodyScrollTop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_throttleScroll", lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"](_this._onScroll, 100));

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
          document.addEventListener("scroll", this._throttleScroll);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        document.removeEventListener("scroll", this._onScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // if (typeof window === "undefined") {
      //   return 0;
      // } else if (typeof window != "undefined") {
      //   document.addEventListener("scroll", this._throttleScroll);
      // }
      if (this.props.women) {
        var transform = {
          x: calcX(this.props.x),
          y: calcY(this.props.y)
        };
        console.log(transform);
        var allWomen = this.props.women.map(function (woman) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "womanItem",
            key: woman.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, woman.name));
        });
        var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["WomenListWrap"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["ContainerTop"], {
          transform: transform,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 0,
          style: {
            transform: "rotateY(".concat(props.transform.y, "deg) rotateX(").concat(props.transform.x, "deg)")
          },
          scroll: this.state.scrollTop,
          id: "womanList",
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 1,
          scroll: this.state.scrollTop,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 2,
          scroll: this.state.scrollTop,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
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
//# sourceMappingURL=index.js.1d46e86d88cc4c084322.hot-update.js.map