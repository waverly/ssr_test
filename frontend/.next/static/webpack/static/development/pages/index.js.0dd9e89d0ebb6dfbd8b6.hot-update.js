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
/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Share */ "./components/Share.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
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
      scrollTop: 0,
      newlyAddedItem: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      // console.log(this.state.scrollTop);
      var bodyScrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (bodyScrollTop > 5) {
        console.log("runningonScroll");

        _this.setState({
          scrollTop: bodyScrollTop
        });
      }
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
        document.body.scrollTop = 0;
        this.setState({
          scrollTop: 0
        });
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["setBodyHeight"])();
        document.addEventListener("scroll", this._throttleScroll);
        window.addEventListener("resize", _helpers__WEBPACK_IMPORTED_MODULE_5__["setBodyHeight"]);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.women.length !== this.props.women.length) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["setBodyHeight"])();
        console.log("a new woman has been added to the list.");
        console.log(this.props.women[this.props.women.length - 1]);
        var newElId = document.getElementById("womanList").lastChild.id;
        var newlyAddedItem = {
          name: this.props.women[this.props.women.length - 1].name,
          id: newElId
        };
        console.log({
          newElId: newElId
        });
        this.setState({
          newlyAddedItem: newlyAddedItem
        });
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: "smooth"
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        document.removeEventListener("scroll", this._throttleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.women) {
        var allWomen = this.props.women.map(function (woman, index) {
          //  TODO: clean up ids - how to deal with duplicates?
          var personId = woman.name.replace(/[^a-zA-Z ]/g, "").split(" ").join("") + index; // console.log(personId);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            id: personId,
            className: "womanItem",
            key: woman.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, woman.name));
        });
        var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["WomenListWrap"], {
          style: {
            transform: "skew(".concat(this.props.x * 2, "deg)")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          style: {
            //   transform: `rotateX(${this.props.y * -1}deg)`
            transformOrigin: "bottom center",
            transform: "matrix3d(\n                1,\n                0,\n                0,\n                0,\n                0,\n                ".concat(this.props.matrix3DVal2, ",\n                ").concat(this.props.matrix3DVal1, ",\n                0,\n                0,\n                ").concat(this.props.matrix3DVal1 * -1, ",\n                ").concat(this.props.matrix3DVal2, ",\n                0,\n                0,\n                0,\n                0,\n                1\n              )")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 0,
          style: {
            transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
          },
          id: "womanList",
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          style: {
            position: "relative",
            zIndex: "10",
            transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
          },
          order: 1,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"] // transform: matrix3d(1, 0, 0, 0, 0, 0.740218, -0.672367, 0, 0, 0.672367, 0.740218, 0, 0, 0, 0, 1);
        , {
          style: {
            //   transform: `rotateX(${this.props.y * -1}deg)`
            transformOrigin: "top center",
            transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          style: {
            transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
          },
          order: 2,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, allWomen))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Share__WEBPACK_IMPORTED_MODULE_4__["default"], {
          woman: this.state.newlyAddedItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }));
        return containers;
      } else return null;
    }
  }]);

  return WomenList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Set default props


WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};
/* harmony default export */ __webpack_exports__["default"] = (WomenList);

/***/ })

})
//# sourceMappingURL=index.js.0dd9e89d0ebb6dfbd8b6.hot-update.js.map