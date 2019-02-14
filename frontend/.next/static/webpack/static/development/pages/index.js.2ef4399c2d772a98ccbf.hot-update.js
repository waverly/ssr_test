webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Women.js":
/*!*****************************!*\
  !*** ./components/Women.js ***!
  \*****************************/
/*! exports provided: default, ALL_WOMEN_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_WOMEN_QUERY", function() { return ALL_WOMEN_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Woman__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Woman */ "./components/Woman.js");
/* harmony import */ var _CreateWoman__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateWoman */ "./components/CreateWoman.js");
/* harmony import */ var _ThreeWomen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThreeWomen */ "./components/ThreeWomen.js");
/* harmony import */ var _WomenList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WomenList */ "./components/WomenList.js");
/* harmony import */ var _Manifesto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manifesto */ "./components/Manifesto.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/Women.js";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_WOMEN_QUERY {\n    women {\n      id\n      name\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var ALL_WOMEN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Women__Center",
  componentId: "da9jec-0"
})(["position:relative;width:100vw;"]);
var ManifestoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Women__ManifestoWrapper",
  componentId: "da9jec-1"
})(["width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:", ";justify-content:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;.module{width:70%;height:70%;color:white;background:black;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:50px;margin:0 auto;}h1{color:", ";}"], function (props) {
  return props.display ? "block" : "none";
}, function (props) {
  return props.theme.green;
});

var Women =
/*#__PURE__*/
function (_Component) {
  _inherits(Women, _Component);

  function Women() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Women);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Women)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      x: null,
      y: null,
      scroll: null,
      test: "hi",
      displayManifesto: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onMouseMove", function (e) {
      _this.setState({
        x: e.screenX,
        y: e.screenY
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      // console.log("we have scrolled");
      // const bodyScrollTop =
      //   window.pageYOffset !== undefined
      //     ? window.pageYOffset
      //     : (
      //         document.documentElement ||
      //         document.body.parentNode ||
      //         document.body
      //       ).scrollTop;
      // console.log(bodyScrollTop);
      // this.setState({ scroll: bodyScrollTop });
      console.log("hi");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_closeManifesto", function () {
      _this.setState({
        displayManifesto: false
      });
    });

    return _this;
  }

  _createClass(Women, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        // console.log("there is a window");
        document.removeEventListener("scroll", this._onScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined" && this.state.scroll === null) {// console.log("there is a window");
        // document.addEventListener("scroll", this._onScroll);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        onMouseMove: this._onMouseMove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_WOMEN_QUERY,
        refetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WomenList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          women: data.women,
          x: _this2.state.x,
          y: _this2.state.y,
          scroll: _this2.state.scroll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateWoman__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }));
      }));
    }
  }]);

  return Women;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Women);


/***/ })

})
//# sourceMappingURL=index.js.2ef4399c2d772a98ccbf.hot-update.js.map