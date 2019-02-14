module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateWoman.js":
/*!***********************************!*\
  !*** ./components/CreateWoman.js ***!
  \***********************************/
/*! exports provided: default, CREATE_WOMAN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_WOMAN_MUTATION", function() { return CREATE_WOMAN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _Women__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Women */ "./components/Women.js");

var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/CreateWoman.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_WOMAN_MUTATION($name: String!) {\n    createWoman(name: $name) {\n      name\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var CREATE_WOMAN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var CreateWoman =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateWoman, _Component);

  function CreateWoman() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateWoman);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateWoman)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: "Name Here"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  _createClass(CreateWoman, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_WOMAN_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, function (createWoman, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Stop the form from submitting
                      e.preventDefault(); // call the mutation

                      _context.next = 3;
                      return createWoman({
                        refetchQueries: [{
                          query: _Women__WEBPACK_IMPORTED_MODULE_7__["ALL_WOMEN_QUERY"]
                        }]
                      });

                    case 3:
                      res = _context.sent;
                      // change them to the single item page
                      console.log(res);

                      _this2.setState({
                        name: "Name Goes Here"
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name Goes Here",
          required: true,
          value: _this2.state.name,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Submit"))));
      });
    }
  }]);

  return CreateWoman;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateWoman);


/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Manifesto.js":
/*!*********************************!*\
  !*** ./components/Manifesto.js ***!
  \*********************************/
/*! exports provided: Manifesto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manifesto", function() { return Manifesto; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/Manifesto.js";


var ManifestoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Manifesto__ManifestoWrapper",
  componentId: "mvn263-0"
})(["width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:block;justify-content:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;.module{width:70%;height:70%;color:white;background:black;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:50px;}h1{color:", ";}"], function (props) {
  return props.theme.green;
});
var Manifesto = function Manifesto(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ManifestoWrapper, {
    display: props.display,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "module",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Today is International Woman's Day.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Why is this day important? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
};

/***/ }),

/***/ "./components/ThreeWomen.js":
/*!**********************************!*\
  !*** ./components/ThreeWomen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Woman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Woman */ "./components/Woman.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-orbitcontrols */ "three-orbitcontrols");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/ThreeWomen.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var camera;

var ThreeWomen =
/*#__PURE__*/
function (_Component) {
  _inherits(ThreeWomen, _Component);

  function ThreeWomen(props) {
    var _this;

    _classCallCheck(this, ThreeWomen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ThreeWomen).call(this, props));
    _this.start = _this.start.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.stop = _this.stop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.animate = _this.animate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // init goes in here


  _createClass(ThreeWomen, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var mouseX, mouseY, windowHalfX, windowHalfY, scene, renderer, container, particle, dirLight, pointLight, controls, geometry, loader, textiii, women, material, names;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mouseX = 0, mouseY = 0, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;
                container = document.createElement("div");
                document.body.appendChild(container);
                scene = new three__WEBPACK_IMPORTED_MODULE_4__["Scene"]();
                scene.fog = new three__WEBPACK_IMPORTED_MODULE_4__["Fog"](0x000000, 250, 1400); // LIGHTS

                dirLight = new three__WEBPACK_IMPORTED_MODULE_4__["DirectionalLight"](0xffffff, 0.125);
                dirLight.position.set(0, 0, 1).normalize();
                scene.add(dirLight);
                pointLight = new three__WEBPACK_IMPORTED_MODULE_4__["PointLight"](0xffffff, 1.5);
                pointLight.position.set(50, 100, 90);
                scene.add(pointLight);
                renderer = new three__WEBPACK_IMPORTED_MODULE_4__["WebGLRenderer"]({
                  alpha: true
                }); // gradient; this can be swapped for WebGLRenderer

                renderer.setSize(window.innerWidth, window.innerHeight); // Configure renderer clear color

                renderer.setClearColor("#FF4500");
                container.appendChild(renderer.domElement);
                camera = new three__WEBPACK_IMPORTED_MODULE_4__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 1, 10000);
                camera.position.z = 100;
                controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_5___default.a(camera, renderer.domElement);
                controls.enableKeys = false; // NAMES

                geometry = new three__WEBPACK_IMPORTED_MODULE_4__["Geometry"]();
                this.scene = scene;
                this.camera = camera;
                this.controls = controls;
                this.renderer = renderer; // this.material = material;

                this.windowHalfX = windowHalfX;
                this.windowHalfY = windowHalfY;
                loader = new three__WEBPACK_IMPORTED_MODULE_4__["FontLoader"]();
                textiii = this.props.women[4].name;
                console.log(textiii);
                women = this.props.women;
                material = new three__WEBPACK_IMPORTED_MODULE_4__["MeshLambertMaterial"]({
                  color: "#433F81"
                });
                names = [];
                loader.load("/static/fonts/spacemonoregular.type.json", function (font) {
                  console.log(women);
                  var cache = {}; // for (let i = 0; i < 26; i++) {
                  //   const letterCode = (i + 10).toString(36);
                  //   cache[letterCode] = new THREE.TextGeometry(letterCode, {
                  //     font: font,
                  //     size: 10,
                  //     height: 5,
                  //     curveSegments: 12,
                  //     bevelEnabled: true,
                  //     bevelThickness: 2,
                  //     bevelSize: 2,
                  //     bevelSegments: 5
                  //   });
                  // }

                  for (var _i = 0; _i < women.length; _i++) {
                    var textgroup = new three__WEBPACK_IMPORTED_MODULE_4__["Object3D"]();
                    var womanName = women[_i].name;

                    for (var _i = 0; _i < womanName.length; _i++) {
                      console.log(womanName.charAt(_i)); // const char_mesh = new THREE.Mesh(geometry, material);
                      // textgroup.add(char_mesh);
                      // if (i === womanName.length - 2) {
                      //   scene.add(textgroup);
                      // }
                    } // char_mesh = mesh( cache[char], material )
                    // char_mesh.x += offset;
                    // textgroup.add(char_mesh);
                    // console.log(women[i].name);
                    // const text = women[i].name;
                    // const geometry = new THREE.TextGeometry(text, {
                    //   font: font,
                    //   size: 10,
                    //   height: 5,
                    //   curveSegments: 12,
                    //   bevelEnabled: true,
                    //   bevelThickness: 2,
                    //   bevelSize: 2,
                    //   bevelSegments: 5
                    // });
                    // particle = new THREE.Mesh(geometry, material);
                    // particle.position.x = Math.random() * 500 - 1;
                    // particle.position.y = Math.random() * 500 - 1;
                    // particle.position.z = Math.random() * 500 - 1;
                    // // add name to
                    // // particle.name
                    // scene.add(particle);
                    // names.push(particle);

                  } // console.log(geometry.vertices);
                  // // console.log(geometry.vertices[0].x);
                  // geometry.vertices.push(particle.position);

                }, // onProgress callback
                function (xhr) {
                  console.log(xhr.loaded / xhr.total * 100 + "% loaded");
                }, // onError callback
                function (err) {
                  console.log("An error happened");
                }); // END NAMES
                // lines
                // var line = new THREE.Line(
                //   geometry,
                //   new THREE.LineBasicMaterial({ color: 0xfdff5f, opacity: 0.5 })
                // );
                // scene.add(line);
                // mousey

                document.addEventListener("mousemove", this.onDocumentMouseMove, false);
                document.addEventListener("touchstart", this.onDocumentTouchStart, false);
                document.addEventListener("touchmove", this.onDocumentTouchMove, false);
                this.animate();

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
      this.mount.removeChild(this.renderer.domElement);
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      cancelAnimationFrame(this.frameId);
    }
  }, {
    key: "animate",
    value: function animate() {
      requestAnimationFrame(this.animate);
      this.renderScene();
    }
  }, {
    key: "renderScene",
    value: function renderScene() {
      // camera.position.x += (mouseX - camera.position.x) * 0.05;
      // camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position); // controls.update();

      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, {
    key: "onDocumentMouseMove",
    value: function onDocumentMouseMove(event) {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    }
  }, {
    key: "onDocumentTouchStart",
    value: function onDocumentTouchStart(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      }
    }
  }, {
    key: "onDocumentTouchMove",
    value: function onDocumentTouchMove(event) {
      if (event.touches.length == 1) {
        event.preventDefault();
        this.mouseX = event.touches[0].pageX - windowHalfX;
        this.mouseY = event.touches[0].pageY - windowHalfY;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: "100vw",
          height: "90vh",
          position: "absolute",
          bottom: "10vh"
        },
        ref: function ref(mount) {
          _this2.mount = mount;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      });
    }
  }]);

  return ThreeWomen;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // class ThreeWomen extends Component {
//   componentDidUpdate() {
//     console.log("inside of three women");
//   }
//   render() {
//     return (
//       <WomenList>
//         {this.props.women.map(woman => (
//           <Woman woman={woman} key={woman.id} />
//         ))}
//       </WomenList>
//     );
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (ThreeWomen);

/***/ }),

/***/ "./components/Woman.js":
/*!*****************************!*\
  !*** ./components/Woman.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Woman; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_WomanStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/WomanStyles */ "./components/styles/WomanStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/components/Woman.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Woman =
/*#__PURE__*/
function (_Component) {
  _inherits(Woman, _Component);

  function Woman() {
    _classCallCheck(this, Woman);

    return _possibleConstructorReturn(this, _getPrototypeOf(Woman).apply(this, arguments));
  }

  _createClass(Woman, [{
    key: "render",
    value: function render() {
      var woman = this.props.woman;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomanStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, woman.name);
    }
  }]);

  return Woman;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Woman, "propTypes", {
  woman: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});



/***/ }),

/***/ "./components/Women.js":
/*!*****************************!*\
  !*** ./components/Women.js ***!
  \*****************************/
/*! exports provided: default, ALL_WOMEN_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_WOMEN_QUERY", function() { return ALL_WOMEN_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
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
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Women__Center",
  componentId: "da9jec-0"
})(["position:relative;width:100vw;"]);
var ManifestoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
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
      displayManifesto: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onMouseMove", function (e) {
      _this.setState({
        x: e.screenX,
        y: e.screenY
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_closeManifesto", function () {
      _this.setState({
        displayManifesto: false
      });
    });

    return _this;
  }

  _createClass(Women, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        onMouseMove: this._onMouseMove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_WOMEN_QUERY,
        refetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WomenList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          women: data.women,
          x: _this2.state.x,
          y: _this2.state.y,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateWoman__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }));
      }));
    }
  }]);

  return Women;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Women);


/***/ }),

/***/ "./components/WomenList.js":
/*!*********************************!*\
  !*** ./components/WomenList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
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
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 1,
          scroll: this.state.scrollTop,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, allWomen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
          order: 2,
          scroll: this.state.scrollTop,
          className: "womenWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
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

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;position:fixed;width:100vw;left:0;bottom:0;background:black;z-index:10;label{display:block;margin-bottom:1rem;color:white;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;color:", ";font-size:16px;&:focus{outline:0;border-bottom:2px solid ", ";}}button,input[type=\"submit\"]{width:auto;background:transparent;color:", ";border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border:2px solid;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border-radius:30%;border-collapse:separate;display:block;}.wrapper{display:flex;flex-direction:row;width:100%;justify-content:space-between;label{width:70%;display:flex;flex-direction:column;align-items:flex-start;color:transparent;}input{width:100%;width:100%;background-color:transparent;border-bottom:2px solid #00ff00;::-webkit-input-placeholder{color:#00ff00;font-size:14px;}::-moz-placeholder{color:#00ff00;font-size:14px;}:-ms-input-placeholder{color:#00ff00;font-size:14px;}:-moz-placeholder{color:#00ff00;font-size:14px;}}button{width:150px;}}fieldset{border:0;padding:0;display:flex;&[disabled]{opacity:0.5;}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "nwbk6t-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/styles/WomanStyles.js":
/*!******************************************!*\
  !*** ./components/styles/WomanStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Woman = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "WomanStyles__Woman",
  componentId: "eep7uh-0"
})(["color:white;background:black;display:inline;margin:0 10px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Woman);

/***/ }),

/***/ "./components/styles/WomenList.js":
/*!****************************************!*\
  !*** ./components/styles/WomenList.js ***!
  \****************************************/
/*! exports provided: WomenListWrap, ContainerTop, Container, InnerWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenListWrap", function() { return WomenListWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTop", function() { return ContainerTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerWrap", function() { return InnerWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WomenListWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__WomenListWrap",
  componentId: "sc-18a2oqn-0"
})(["position:fixed;top:0;left:0;width:100%;height:100vh;-webkit-perspective:150px;perspective:150px;.womenWrapper{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;}.womanItem{width:100vw;outline:1px solid ", ";display:flex;justify-content:center;align-items:center;-webkit-transform:translate3d(0,0,0);h1{color:", ";text-transform:uppercase;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});
var ContainerTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__ContainerTop",
  componentId: "sc-18a2oqn-1"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;transform:", ";"], function (props) {
  return props.transform.y && props.transform.x ? " rotateY(".concat(props.transform.y, "deg) rotateX(").concat(props.transform.x, "deg)\n        ") : " rotateY(0deg) rotateX(0deg)";
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__Container",
  componentId: "sc-18a2oqn-2"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;outline:2px solid yellow;"]);
var InnerWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__InnerWrap",
  componentId: "sc-18a2oqn-3"
})(["margin-top:", ";transform:", ";"], function (props) {
  return props.order ? "calc((-100vh / 3) * ".concat(props.order, ");") : "0";
}, function (props) {
  return props.scroll ? "translate3d(0px, -".concat(props.scroll, "px, 0px)") : null;
});

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Women__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Women */ "./components/Women.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxnPrototype/ssr_test-master/frontend/pages/index.js";



var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Women__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three-orbitcontrols":
/*!**************************************!*\
  !*** external "three-orbitcontrols" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three-orbitcontrols");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map