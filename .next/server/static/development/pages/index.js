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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/bkarthikeyan/Personal/github/School/nextjs/pencil-art-porfolio/components/logo.js";
 // Circle Right icon designed by Hector (CC license): https://thenounproject.com/term/circle-right/557979

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 1150.9491 1151.219"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(1904.506,419.41757)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m -1354.6565,731.56083 c -20.4904,-1.2663 -41.6453,-3.3398 -56.875,-5.5744 -120.7717,-17.7206 -230.7568,-71.8587 -318.5583,-156.8044 -90.8856,-87.92949 -150.3919,-204.43803 -168.8656,-330.62503 -4.2575,-29.08131 -5.5507,-48.30232 -5.5507,-82.5 0,-34.19767 1.2932,-53.41869 5.5507,-82.500001 17.6653,-120.66555 71.8544,-230.758109 156.7989,-318.558329 87.9295,-90.88557 204.438,-150.39189 330.625,-168.86555 29.0813,-4.25748 48.3023,-5.55069 82.5,-5.55069 34.1977,0 53.4187,1.29321 82.5,5.55069 126.187,18.47366 242.6955,77.97998 330.62496,168.86556 26.5872,27.48095 45.6005,51.07991 66.1988,82.16452 54.0043,81.497079 85.2183,170.4165988 94.6107,269.5188 0.8471,8.9375 1.5401,31.15625 1.5401,49.375 0,44.49681 -3.0696,75.17263 -11.7846,117.76996 -14.705,71.87482 -45.7252,144.69077 -88.1667,206.95994 -48.3424,70.92683 -114.3252,132.03273 -188.64826,174.70493 -70.9275,40.7226 -153.5259,66.7537 -235.625,74.2577 -15.4629,1.4134 -64.5864,2.5708 -76.875,1.8113 z m 77.8682,-139.798 c 129.6922,-16.8933 241.2895,-85.75754 312.08516,-192.58083 38.8375,-58.60169 62.0617,-122.51198 70.8604,-195 2.2079,-18.1894 2.2079,-75.5606 0,-93.75 -14.469,-119.2023912 -71.0092,-221.84159 -162.68876,-295.33419 -63.2446,-50.69841 -140.8843,-82.69356 -225.625,-92.97956 -18.1894,-2.20786 -75.5606,-2.20786 -93.75,0 -84.7407,10.286 -162.3804,42.28115 -225.625,92.97956 -91.6796,73.4926 -148.2197,176.1317988 -162.6888,295.33419 -2.2078,18.1894 -2.2078,75.5606 0,93.75 14.4672,119.18687 71.0528,221.91 162.6888,295.33839 63.3034,50.72534 146.1995,84.78074 225.625,92.69134 7.5625,0.7532 15.7187,1.5927 18.125,1.8655 10.3498,1.1734 66.5446,-0.4324 80.9932,-2.3144 z m -73.958,-217.77592 -42.3398,-41.98998 55.7773,-55.78762 c 30.6775,-30.68319 55.7773,-56.25862 55.7773,-56.8343 0,-0.57566 -73.5469,-0.8546 -163.4375,-0.61983 l -163.4375,0.42682 0,-60 0,-60.000001 165.3125,-0.3171 c 90.9219,-0.1744 165.3125,-0.69776 165.3125,-1.16303 0,-0.46524 -25.875,-26.38857 -57.5,-57.60736 -31.625,-31.2188002 -57.5,-57.41734 -57.5,-58.21897 0,-1.76811 82.6199,-84.568539 84.3841,-84.568539 0.685,0 59.6315,58.388139 130.9923,129.751399 l 129.7469,129.751411 -129.2534,129.62359 c -71.0894,71.29298 -129.7578,129.60557 -130.3742,129.58355 -0.6164,-0.022 -20.1736,-18.93555 -43.4605,-42.03004 z",
    fill: "#000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logo */ "./components/logo.js");
var _jsxFileName = "/Users/bkarthikeyan/Personal/github/School/nextjs/pencil-art-porfolio/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4083519436" + " " + "root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Next.js on Heroku")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4083519436",
    __self: this
  }, ".root.jsx-4083519436{font-family:\"roboto\";margin:auto;text-align:center;color:#4a23fb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ia2FydGhpa2V5YW4vUGVyc29uYWwvZ2l0aHViL1NjaG9vbC9uZXh0anMvcGVuY2lsLWFydC1wb3Jmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHOEIscUJBQ1QsWUFDTSxrQkFDSixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmthcnRoaWtleWFuL1BlcnNvbmFsL2dpdGh1Yi9TY2hvb2wvbmV4dGpzL3BlbmNpbC1hcnQtcG9yZm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dvXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDx0aXRsZT5OZXh0LmpzIG9uIEhlcm9rdTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5yb290IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzRhMjNmYjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8ZGl2PlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCI0NTAuMjJcIlxuICAgICAgICBoZWlnaHQ9XCIzOTAuNTY1XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA0NS4yMiAzOS41NjVcIlxuICAgICAgPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc1LjE5OSAtNzkxLjg5NylcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzFcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxXCJcbiAgICAgICAgICAgIGQ9XCJNLTM3NS4yLDgwMy43bDYuNjYyLTcuNTc2YzEuMTM0LTEuMjg5LDIuMjYtMi41ODQsMy40MTItMy44NTdhMS4wNzEsMS4wNzEsMCwwLDEsLjY4NS0uMzUzYzMuMjgzLS4wMjIsNi41NjctLjAxNSw5Ljg1LS4wMTNhMywzLDAsMCwxLC4zNDEuMDQydjM5LjQ1Yy0uMTc4LS4yLS4zLS4zMjUtLjQtLjQ2cS01Ljc0MS03LjYtMTEuNDc3LTE1LjIwN2MtMS4zLTEuNzI1LTIuNTU5LTMuNDgtMy44NTctNS4yMDZhLjYyMS42MjEsMCwwLDEsLjAxOC0uODVjLjkxNi0xLjM2OSwxLjgxLTIuNzUzLDIuNzU0LTQuMTk1LS4yLS4wMjEtLjM1NC0uMDUyLS41MDgtLjA1My0xLjgyNCwwLTMuNjQ5LS4wMjQtNS40NzIuMDExYTEuMTYsMS4xNiwwLDAsMS0xLjE2Mi0uNTg3Qy0zNzQuNTg1LDgwNC40NjMtMzc0Ljg4NCw4MDQuMTIyLTM3NS4yLDgwMy43Wm0xNy43ODcsMS43MjJjLTEuOTExLDAtMy43MTIsMC01LjUxMy4wMDdhLjYxMS42MTEsMCwwLDAtLjQ0My4xNzFjLS45MjMsMS4zMTEtMS44MTEsMi42NDgtMi43NDQsMy45NTItLjI5LjQwNS0uMTY4LjY2MS4wOTMsMSwuOTMxLDEuMiwxLjgzNCwyLjQyNCwyLjc1LDMuNjM3cTIuNjk0LDMuNTcsNS4zOSw3LjEzOGMuMTE5LjE1Ny4yNTEuMy40NjcuNTY0Wm0tLjAyNi0xMC4zMDhjLTEuODM1LDAtMy42MTMuMDE0LTUuMzg5LS4wMTFhMS4wOSwxLjA5LDAsMCwwLS45MjYuNDMzYy0xLjgsMi4wNy0zLjYyLDQuMTI1LTUuNDMxLDYuMTg1LS4xMDcuMTIyLS4yLjI1NC0uMzU4LjQ0N2gxMi4xWlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiXG4gICAgICAgICAgICBmaWxsPVwiIzRhMjNmYlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzJcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAyXCJcbiAgICAgICAgICAgIGQ9XCJNLTE4Ni43NjksODMxLjcxNVY3OTIuMTg4aDMuMTQ3djEwLjIyNGgxMi4xNjFjLS42NTctLjc1My0xLjI1Ni0xLjQ0Mi0xLjg1OC0yLjEyNy0uODA3LS45MTktMS42MjctMS44MjgtMi40MTktMi43NTlhMS4xNzYsMS4xNzYsMCwwLDEtLjI5MS0uNjcxYy0uMDI2LTEuNDM2LS4wMTMtMi44NzItLjAxMy00LjUybDEwLjIyMSwxMS42MTRjLS4zODYuNTE3LS43MjksMS4wMzYtMS4xMzksMS41YTEsMSwwLDAsMS0uNjc2LjIxOWMtMS44MjQuMDE3LTMuNjQ4LjAwOS01LjQ3My4wMDloLS43NjJjLjY0Mi45NDQsMS4yMjYsMS43OCwxLjc4NSwyLjYzMi40NTMuNjkxLDEuMjIyLDEuNDA4LDEuMjExLDIuMS0uMDEuNjY5LS44MjQsMS4zMzktMS4zMTIsMS45ODhxLTMuMjg1LDQuMzY5LTYuNTg2LDguNzI2YTEuMzUzLDEuMzUzLDAsMCwxLS40OTEuNDM2di0uNTc5YzAtMS4zMzEtLjAyMi0yLjY2Mi4wMTUtMy45OTFhMS44NSwxLjg1LDAsMCwxLC4zMzgtLjk4NGMxLjMtMS43NzIsMi42My0zLjUyNSwzLjk2OS01LjI2OWEuNjI0LjYyNCwwLDAsMCwuMDM5LS44ODZjLS44ODItMS4yNDEtMS43MTYtMi41MTYtMi41ODctMy43NjYtLjEyLS4xNzItLjM0LS4zODgtLjUxNy0uMzkxLTEuODQxLS4wMjktMy42ODMtLjAxOC01LjYxMS0uMDE4di44YzAsNi43OTMuMDA3LDEzLjU4Ni0uMDE4LDIwLjM3OGEyLjI2OSwyLjI2OSwwLDAsMS0uNDA3LDEuMjE4Qy0xODQuODg3LDgyOS4yNzUtMTg1LjgsODMwLjQzLTE4Ni43NjksODMxLjcxNVpcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjQuMTU3IC0wLjI1NClcIlxuICAgICAgICAgICAgZmlsbD1cIiM0YTIzZmJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGgxPkNvbWluZyBTb29uISEhPC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/bkarthikeyan/Personal/github/School/nextjs/pencil-art-porfolio/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "450.22",
    height: "390.565",
    viewBox: "0 0 45.22 39.565",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(375.199 -791.897)",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M-375.2,803.7l6.662-7.576c1.134-1.289,2.26-2.584,3.412-3.857a1.071,1.071,0,0,1,.685-.353c3.283-.022,6.567-.015,9.85-.013a3,3,0,0,1,.341.042v39.45c-.178-.2-.3-.325-.4-.46q-5.741-7.6-11.477-15.207c-1.3-1.725-2.559-3.48-3.857-5.206a.621.621,0,0,1,.018-.85c.916-1.369,1.81-2.753,2.754-4.195-.2-.021-.354-.052-.508-.053-1.824,0-3.649-.024-5.472.011a1.16,1.16,0,0,1-1.162-.587C-374.585,804.463-374.884,804.122-375.2,803.7Zm17.787,1.722c-1.911,0-3.712,0-5.513.007a.611.611,0,0,0-.443.171c-.923,1.311-1.811,2.648-2.744,3.952-.29.405-.168.661.093,1,.931,1.2,1.834,2.424,2.75,3.637q2.694,3.57,5.39,7.138c.119.157.251.3.467.564Zm-.026-10.308c-1.835,0-3.613.014-5.389-.011a1.09,1.09,0,0,0-.926.433c-1.8,2.07-3.62,4.125-5.431,6.185-.107.122-.2.254-.358.447h12.1Z",
    transform: "translate(0 0)",
    fill: "#4a23fb",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M-186.769,831.715V792.188h3.147v10.224h12.161c-.657-.753-1.256-1.442-1.858-2.127-.807-.919-1.627-1.828-2.419-2.759a1.176,1.176,0,0,1-.291-.671c-.026-1.436-.013-2.872-.013-4.52l10.221,11.614c-.386.517-.729,1.036-1.139,1.5a1,1,0,0,1-.676.219c-1.824.017-3.648.009-5.473.009h-.762c.642.944,1.226,1.78,1.785,2.632.453.691,1.222,1.408,1.211,2.1-.01.669-.824,1.339-1.312,1.988q-3.285,4.369-6.586,8.726a1.353,1.353,0,0,1-.491.436v-.579c0-1.331-.022-2.662.015-3.991a1.85,1.85,0,0,1,.338-.984c1.3-1.772,2.63-3.525,3.969-5.269a.624.624,0,0,0,.039-.886c-.882-1.241-1.716-2.516-2.587-3.766-.12-.172-.34-.388-.517-.391-1.841-.029-3.683-.018-5.611-.018v.8c0,6.793.007,13.586-.018,20.378a2.269,2.269,0,0,1-.407,1.218C-184.887,829.275-185.8,830.43-186.769,831.715Z",
    transform: "translate(-164.157 -0.254)",
    fill: "#4a23fb",
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4083519436",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Coming Soon!!!")));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bkarthikeyan/Personal/github/School/nextjs/pencil-art-porfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map