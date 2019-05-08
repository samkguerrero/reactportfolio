require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(82);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(83);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(81);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return databaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return analytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

var port = process.env.PORT || 80;
var host = process.env.WEBSITE_HOSTNAME || '138.68.250.205:80';

var databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

var analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};

var auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(9);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* databaseUrl */], {
  define: {
    freezeTableName: true
  }
});

/* harmony default export */ __webpack_exports__["a"] = sequelize;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync() {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync.apply(__WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */], arguments);
}

/* harmony default export */ __webpack_exports__["a"] = { sync: sync };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(69);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layout_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Footer__ = __webpack_require__(42);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var Layout = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Layout, _React$Component);

  function Layout() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Layout);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Layout.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Layout)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Footer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Layout_css___default.a)(Layout);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);





/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].func.isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

var App = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$PureComponent);

  function App() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(App)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(9);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Html.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var Html = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Html, _React$Component);

  function Html() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Html);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Html.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Html)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Html, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          description = _props.description,
          style = _props.style,
          scripts = _props.scripts,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'html',
        { className: 'no-js', lang: 'en', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'head',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }),
          style && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }),
          scripts && scripts.map(function (script) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('script', { key: script, src: script, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: _this2
            });
          }),
          __WEBPACK_IMPORTED_MODULE_6__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('script', {
            dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + __WEBPACK_IMPORTED_MODULE_6__config__["d" /* analytics */].google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_6__config__["d" /* analytics */].google.trackingId && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Html;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string.isRequired,
  style: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string,
  scripts: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string.isRequired),
  children: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string
};


/* harmony default export */ __webpack_exports__["a"] = Html;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport_facebook__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(9);



var _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */






/**
 * Sign in with Facebook.
 */
__WEBPACK_IMPORTED_MODULE_2_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_3_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* auth */].facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* auth */].facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
  /* eslint-disable no-underscore-dangle */
  var loginName = 'facebook';
  var claimType = 'urn:facebook:access_token';
  var fooBar = function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var userLogin, user, users, _user;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!req.user) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* UserLogin */].findOne({
                attributes: ['name', 'key'],
                where: { name: loginName, key: profile.id }
              });

            case 3:
              userLogin = _context.sent;

              if (!userLogin) {
                _context.next = 8;
                break;
              }

              // There is already a Facebook account that belongs to you.
              // Sign in with that account or delete it, then link it with your current account.
              done();
              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return __WEBPACK_IMPORTED_MODULE_4__data_models__["c" /* User */].create({
                id: req.user.id,
                email: profile._json.email,
                logins: [{ name: loginName, key: profile.id }],
                claims: [{ type: claimType, value: profile.id }],
                profile: {
                  displayName: profile.displayName,
                  gender: profile._json.gender,
                  picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                }
              }, {
                include: [{ model: __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_4__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_4__data_models__["e" /* UserProfile */], as: 'profile' }]
              });

            case 10:
              user = _context.sent;

              done(null, {
                id: user.id,
                email: user.email
              });

            case 12:
              _context.next = 32;
              break;

            case 14:
              _context.next = 16;
              return __WEBPACK_IMPORTED_MODULE_4__data_models__["c" /* User */].findAll({
                attributes: ['id', 'email'],
                where: { '$logins.name$': loginName, '$logins.key$': profile.id },
                include: [{
                  attributes: ['name', 'key'],
                  model: __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* UserLogin */],
                  as: 'logins',
                  required: true
                }]
              });

            case 16:
              users = _context.sent;

              if (!users.length) {
                _context.next = 21;
                break;
              }

              done(null, users[0]);
              _context.next = 32;
              break;

            case 21:
              _context.next = 23;
              return __WEBPACK_IMPORTED_MODULE_4__data_models__["c" /* User */].findOne({ where: { email: profile._json.email } });

            case 23:
              _user = _context.sent;

              if (!_user) {
                _context.next = 28;
                break;
              }

              // There is already an account using this email address. Sign in to
              // that account and link it with Facebook manually from Account Settings.
              done(null);
              _context.next = 32;
              break;

            case 28:
              _context.next = 30;
              return __WEBPACK_IMPORTED_MODULE_4__data_models__["c" /* User */].create({
                email: profile._json.email,
                emailConfirmed: true,
                logins: [{ name: loginName, key: profile.id }],
                claims: [{ type: claimType, value: accessToken }],
                profile: {
                  displayName: profile.displayName,
                  gender: profile._json.gender,
                  picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
                }
              }, {
                include: [{ model: __WEBPACK_IMPORTED_MODULE_4__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_4__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_4__data_models__["e" /* UserProfile */], as: 'profile' }]
              });

            case 30:
              _user = _context.sent;

              done(null, {
                id: _user.id,
                email: _user.email
              });

            case 32:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  }();

  fooBar().catch(done);
}));

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_2_passport___default.a;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_me__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_news__ = __webpack_require__(54);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      me: __WEBPACK_IMPORTED_MODULE_1__queries_me__["a" /* default */],
      news: __WEBPACK_IMPORTED_MODULE_2__queries_news__["a" /* default */]
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = schema;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ErrorPage_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ErrorPage_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var ErrorPage = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ErrorPage, _React$Component);

  function ErrorPage() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ErrorPage);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ErrorPage.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ErrorPage)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ErrorPage, [{
    key: 'render',
    value: function render() {
      if (true) {
        var error = this.props.error;

        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            error.name
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            error.message
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'pre',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            error.stack
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          'Error'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          'Sorry, a critical error occurred on this page.'
        )
      );
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].object.isRequired
};



/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__ErrorPage_css___default.a)(ErrorPage);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(59).default,
  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(58).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var route;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = (route.title || 'Untitled Page') + ' - http://bigwaterconsulting.net/';
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/set");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AboutMe_css__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AboutMe_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__AboutMe_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/AboutMe/AboutMe.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';




var AboutMe = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AboutMe, _React$Component);

  function AboutMe() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AboutMe);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AboutMe.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AboutMe)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AboutMe, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { id: 'aboutme', className: __WEBPACK_IMPORTED_MODULE_7__AboutMe_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_7__AboutMe_css___default.a.namePlate, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          'About Me'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__AboutMe_css___default.a.aboutmetext, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            'I am a software developer currently seeking new opportunities. My passions are programming and Geographic Information Systems (GIS). I like to learn new technologies and to apply them at work. My degree is in GIS, and I have been studying web development over the past couple years. I like mastering new technologies. It makes me feel powerful, like a wizard who can conjure spells out of text. The human side of me thinks VR applications are cool. In my free time I play around with building VR apps in Unity.'
          )
        )
      );
    }
  }]);

  return AboutMe;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__AboutMe_css___default.a)(AboutMe);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Contact_css__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Contact_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Contact/Contact.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';





var Contact = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Contact, _React$Component);

  function Contact() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Contact);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Contact.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Contact)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Contact, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { id: 'contact', className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.namePlate, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          'Contact'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.faceblock, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.cartoon, src: '/images/myface.png', alt: 'mymug', height: '200', width: '200', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.infoblock, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              'Sam Guerrrero'
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'h3',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              '(818) 857-7857'
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'h3',
              { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.contactemail, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              'samkguerrero@gmail.com'
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.icons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.link, href: 'https://github.com/samkguerrero', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a.staticon1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                }),
                '/samkguerrero'
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_8__Contact_css___default.a)(Contact);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer_css__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Footer_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Footer/Footer.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Footer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Footer, _React$Component);

  function Footer() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Footer);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Footer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Footer)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Footer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Footer_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__Footer_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Footer_css___default.a)(Footer);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Navigation__ = __webpack_require__(45);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Header/Header.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import Link from '../Link';

// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

var Header = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Header, _React$Component);

  function Header() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Header);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Header_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__Header_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Navigation__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_7__Header_css___default.a.nav, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Header_css___default.a)(Header);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_css__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Title__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AboutMe__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Contact__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Projects__ = __webpack_require__(46);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Home/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';








var Home = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _React$Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Home_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Title__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AboutMe__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Projects__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Contact__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Home_css___default.a)(Home);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Navigation_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Navigation_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var Navigation = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Navigation, _React$Component);

  function Navigation() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Navigation);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Navigation.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Navigation)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Navigation, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(__WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.root, this.props.className), role: 'navigation', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.icons, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: 'https://github.com/samkguerrero', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.staticon, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: 'https://www.linkedin.com/in/sam-guerrero-2a007498/', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaLinkedinSquare"], { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.staticon, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: 'https://www.dropbox.com/s/ner1xvsrrnhkfmt/SamGuerreroResume.pdf?dl=0', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaFileTextO"], { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.staticon, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.links, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: '#aboutme', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            'About Me'
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: '#projects', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            'Projects'
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a.link, href: '#contact', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            'Contact'
          )
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Navigation.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_9__Navigation_css___default.a)(Navigation);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Projects_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Projects_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Projects_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Projects/Projects.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';







var Projects = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Projects, _React$Component);

  function Projects(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Projects);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Projects.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Projects)).call(this, props));

    _this.state = {
      selectedProject: "None!",
      showCasingProject: "No"
    };
    _this.showProject = _this.showProject.bind(_this);
    _this.closeProjectShowCase = _this.closeProjectShowCase.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Projects, [{
    key: 'showProject',
    value: function showProject(e) {
      // e.preventDefault()
      console.log("showing a project");
      console.log(e.target.id);
      this.state.selectedProject = e.target.id;
      this.state.showCasingProject = "Yes";
      this.forceUpdate();
    }
  }, {
    key: 'closeProjectShowCase',
    value: function closeProjectShowCase(e) {
      // e.preventDefault()
      console.log("close button clicked");
      this.state.showCasingProject = "No";
      this.forceUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // console.log('Surveys component unmounted.');
      return true;
    }
  }, {
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { id: 'projects', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { className: this.state.showCasingProject === "Yes" ? __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.showcaseProject : __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.showCasingProjectHide, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          },
          this.state.showCasingProject === "Yes" ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaArrowCircleLeft"], { onClick: this.closeProjectShowCase, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.backbutton, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }),
            this.state.selectedProject === 'projlovecraft' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'lovecraft', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  },
                  __self: this
                },
                'Interactive Web Mapping with JavaScript'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  },
                  'After completing ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://arcg.is/1NP1MPs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    },
                    'The World of Lovecraft Tour'
                  ),
                  ' web map with',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.arcgis.com/features/apps/index.html', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    },
                    'ArcGIS Online'
                  ),
                  ', I wanted to try to recreate it with open-source libraries. I felt my map was limited to the templates that ArcGIS Online provide. I recreated The World of Lovecraft Tour using the open-source JavaScript libary ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://leafletjs.com/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    },
                    'Leaflet'
                  ),
                  '. Here I was able to incorporate simple elements into my map that I felt were not accessible with ArcGIS Online templates. With Leaflet, I could manipulate the code and design the map with greater detail.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://samkguerrero.github.io/theworldoflovecraft/love.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/theworldoflovecraft.git', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('iframe', {
                src: 'https://samkguerrero.github.io/theworldoflovecraft/love.html',
                width: '90%', height: '800px', scrolling: 'no', frameBorder: '0', id: 'share-demo-ifram',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              })
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            }),
            this.state.selectedProject === 'projflickrleaflet' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'flickrleaflet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  },
                  __self: this
                },
                'Images by Coordinate with Leaflet and Flickr'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    },
                    __self: this
                  },
                  'This application is what I contributed to as my final project for the University of Washington Professional & Continuing Education course, ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.pce.uw.edu/courses/programming-for-the-browser', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                      },
                      __self: this
                    },
                    'JSCRIPT 200 B Wi 17: Programming For The Browser'
                  ),
                  '. Users can click a point on the map and see filtered imagers related to the coordinates of that clicked location. Using the JavaScript map library',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://leafletjs.com/examples/quick-start/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      },
                      __self: this
                    },
                    ' Leaflet'
                  ),
                  ' I created a map that returned coordinated upon clicking a location on the map. I then used the ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.flickr.com/services/api/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    },
                    'Flickr API'
                  ),
                  ' to load images from their vast library based on the location that the user clicked. I added filter items from the Flickr API for the user to select in order to return a more specific set of images.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://samkguerrero.github.io/picturesbylocation/finalproject.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/picturesbylocation', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('iframe', {
                src: 'https://samkguerrero.github.io/picturesbylocation/finalproject.html',
                width: '90%', height: '800px', scrolling: 'yes', frameBorder: '1', id: 'share-demo-iframe',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              })
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }),
            this.state.selectedProject === 'projdataviz' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dataviz', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  },
                  __self: this
                },
                'Data Visualization and Tracking'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 124
                    },
                    __self: this
                  },
                  'Below are some of the ways I visualize data that is collected. The survey managers often ask about the progress of the field operation on a district by district basis. I aggregate the data by district, and answer is how many of each case status each district has collected. Survey Managers ask how many of each case status field staff have resolved. This important to visualize because it shows at a glance who has the most completes, or who has the most incomplete. Using ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://www.chartjs.org/docs/latest/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 133
                      },
                      __self: this
                    },
                    'Chart.js'
                  ),
                  ' I am able to make graphs and charts dynamically that show the trends in the data more efficiently.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://samkguerrero.github.io/data_vis_and_mapping_for_bwc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/data_vis_and_mapping_for_bwc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 141
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 141
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('iframe', {
                src: 'https://samkguerrero.github.io/data_vis_and_mapping_for_bwc',
                width: '90%', height: '800px', scrolling: 'yes', frameBorder: '1', id: 'share-demo-iframe',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 142
                },
                __self: this
              })
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }),
            this.state.selectedProject === 'projmixology' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'mixology', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  },
                  __self: this
                },
                'Mixologylab.io React App'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 155
                    },
                    __self: this
                  },
                  'This API has since been disconntinued, the screenshots below demonstrate the website\'s functionality. This application is what I help built as my capstone for the University of Washington Professional & Continuing Education course,',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.pce.uw.edu/courses/modern-web-application', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 159
                      },
                      __self: this
                    },
                    'JSCRIPT 300 B Sp 17: Modern Web Application'
                  ),
                  '. Using the ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://facebook.github.io/react/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                      },
                      __self: this
                    },
                    'Reactjs'
                  ),
                  ' framework my group developed this application. By clicking through the buttons, users can filter the drink list by their preferences and return a drink list that reflects their taste. This application uses the',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://addb.absolutdrinks.com/docs/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 163
                      },
                      __self: this
                    },
                    'ABSOLUT API'
                  ),
                  '. The JSON returned from the API once called was manipulated with features from the new ES6 features. The scafolding of the website was created using the',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/facebookincubator/create-react-app', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      },
                      __self: this
                    },
                    'create-react-app'
                  ),
                  'tool. I hope you give the site a visit at ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://mixologylab.io/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                      },
                      __self: this
                    },
                    'mixology.io'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/UWJS300/Capstone-Sung-Knopik-Guerrero', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkblockpairwrapper, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkblockpair, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 173
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkTable, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 175
                        },
                        __self: this
                      },
                      '1. Select Gin, Vodka, Tequila, Brandy, Whisky, or Rum as your base.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinlTd, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 179
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.imgTable, src: '/images/one.PNG', alt: 'Smiley face', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 179
                        },
                        __self: this
                      })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkblockpair, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 182
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 183
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkTable, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 184
                        },
                        __self: this
                      },
                      '2. Select a taste combination for your desired drink.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinlTd, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 187
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.imgTable, src: '/images/two.PNG', alt: 'Smiley face', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 187
                        },
                        __self: this
                      })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkblockpair, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 190
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 191
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkTable, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 192
                        },
                        __self: this
                      },
                      '3. Sort by name or rating and choose a drink you want to make.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinlTd, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 196
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.imgTable, src: '/images/three.PNG', alt: 'Smiley face', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 196
                        },
                        __self: this
                      })
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkblockpair, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 199
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinkTable, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 201
                        },
                        __self: this
                      },
                      '4. View the drink ingredients and watch the video on how to prepare the drink.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 204
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.drinlTd, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 205
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.imgTable, src: '/images/four.PNG', alt: 'Smiley face', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 205
                        },
                        __self: this
                      })
                    )
                  )
                )
              )
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: this
            }),
            this.state.selectedProject === 'projmyprofile' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 216
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                  },
                  __self: this
                },
                'My Profile'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 219
                    },
                    __self: this
                  },
                  'A portfolio was one of the first things I built when trying to teach myself how to assemble a web page. I was interested in web mapping and followed the ',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.youtube.com/watch?v=VcMjo_wczCc', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 221
                      },
                      __self: this
                    },
                    'DevTips '
                  ),
                  'tutorial on how to make a website. They started off from the begining and worked thier way to a fully deployed website. I made this website and had a working copy for myself which I used. I have since redone this website using ReactJS, in order to practice ReactJS'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 226
                    },
                    __self: this
                  },
                  'The challanges for this website came when I was trying to display the project details. Normally I would use JQuery to hide and show what I wanted when the user clicked elements. In ReactJS DOM manipulation is handled very differently. I had to manage the state of the componenet in order to track when the user was clicking into a project or leaving one.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://www.samkguerrero.com', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 233
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/reactportfolio', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.myproftable, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 238
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { width: '800px', src: '/images/myprof1.png', alt: 'Smiley face', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 239
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.myproftable, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 241
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { width: '800px', src: '/images/myprof2.png', alt: 'Smiley face', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 242
                    },
                    __self: this
                  })
                )
              )
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              },
              __self: this
            }),
            this.state.selectedProject === 'projvoiceassistant' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 252
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                  },
                  __self: this
                },
                'Voice Assistant'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 255
                    },
                    __self: this
                  },
                  'The idea behind this app is a virtual assistant that can respond to commands given verbally. We wanted to imiate the functionality of google voice commands and Apple\'s Siri. We have integrated several libraries that gives our virtual assistant the power to server dyanmic content. This project was made with Python as the backend and Django as the framework. It is hosted on an AWS Ec2 instance of Ubuntu 16 and is run with Nginix. The content that is returned is the reuslt of several different API that that application queries with commands from the user.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.voiceassistant.xyz/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 268
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/VoiceAssistant', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 270
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 270
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.voiceassistanttable, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant1.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant2.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant3.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant4.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant5.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant6.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant7.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant8.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                  },
                  __self: this
                })
              )
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 285
              },
              __self: this
            }),
            this.state.selectedProject === 'projaddzoom' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 289
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'addzoom', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 290
                  },
                  __self: this
                },
                'Building Plugins with Python Scripting'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 292
                    },
                    __self: this
                  },
                  'In a previous job I was tasked with investigating the roads around specific points at a detailed scale. The workflow consisted of importing',
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'ftp://ftp2.census.gov/geo/tiger/TIGER2015/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 295
                      },
                      __self: this
                    },
                    'Tiger 2015'
                  ),
                  ' road shapefiles into QGIS. Followed by zooming to the specified coordinates to inquire about the nearby roads. Loading one at a time was not practical, given that there were multiple coordinates to be searched. I built this plugin using templates online to help streamline the process.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://www.youtube.com/watch?v=YeyQzjSMYS4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 302
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 303
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/addandzoom', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 305
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 305
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'table',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.addzoomtbl, border: '1px', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'thead',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 307
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 308
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 309
                        },
                        __self: this
                      },
                      'Previous Workflow'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 310
                        },
                        __self: this
                      },
                      'Workflow with the addandzoom Plugin'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'tr',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 313
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'td',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.workflow, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 314
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'ul',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.addzoomUL, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 315
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 316
                          },
                          __self: this
                        },
                        'Load in ESRI Street basemap tiles with python for spatial reference'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 317
                          },
                          __self: this
                        },
                        'Load in county polygons shapefile (',
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'a',
                          { href: 'https://www.dropbox.com/sh/ggo05ybm28huq19/AACGvyyLSJPlE8I-eWFTrk_2a?dl=0', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 317
                            },
                            __self: this
                          },
                          'TIGER2015_county_index'
                        ),
                        ')'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 318
                          },
                          __self: this
                        },
                        'Symbolize with predefined template'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 319
                          },
                          __self: this
                        },
                        'Flip coordinate pair from Lat/Long to Long/Lat, and paste in the coordinates to zoom to the desired location'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 321
                          },
                          __self: this
                        },
                        'Use the identify tool on the county index polygon layer to find the code of the county which the point is located in'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 323
                          },
                          __self: this
                        },
                        'Search for the code among the names in the tiger roads directory'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 324
                          },
                          __self: this
                        },
                        'Add in the coresponding ',
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'a',
                          { href: 'https://www.dropbox.com/sh/cgw2103jluj3obq/AAAr13-7WiDRdzm2jIRzkEDXa?dl=0', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 324
                            },
                            __self: this
                          },
                          'Tiger Roads'
                        ),
                        ' shapefile that coresponds to the county that the point is in'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 325
                          },
                          __self: this
                        },
                        ' Label and style roads with predefined template for easier readability'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.nonlistworkflow, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 327
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 327
                        },
                        __self: this
                      }),
                      'This process is not feasible given that the points can fall in random counties that span across the United States. Having all the roads already imported world slow down the map. More so, I might not even use half of the imported roads.'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'td',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.workflow, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 334
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'ul',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.addzoomUL, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 335
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 336
                          },
                          __self: this
                        },
                        'Start Python Console, Ctrl + Alt + P'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 337
                          },
                          __self: this
                        },
                        'Click addandzoom plugin button'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 338
                          },
                          __self: this
                        },
                        'Paste in coordinates, click OK'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.nonlistworkflowtitle, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 340
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 340
                        },
                        __self: this
                      }),
                      'How it works ?'
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'ol',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 341
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 342
                          },
                          __self: this
                        },
                        'Adds county index layer to QGIS and symbolizes'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 343
                          },
                          __self: this
                        },
                        'Creates a point from the coordinates that were given to it'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 344
                          },
                          __self: this
                        },
                        'Selects by location, to find which county contains the created point'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 345
                          },
                          __self: this
                        },
                        'Takes the county code from the attributes of the selected county'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 346
                          },
                          __self: this
                        },
                        'Adds in the appropriate Tiger road shapefile using the identified county code from the previous step'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 348
                          },
                          __self: this
                        },
                        'It names the layer in the table of contents, labels the Tiger roads by road name, and symbolizses the roads.'
                      ),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'li',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 350
                          },
                          __self: this
                        },
                        'Lastly it adds a basemap for spatial reference'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.nonlistworkflow, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 352
                        },
                        __self: this
                      },
                      'The plugin streamlines several steps, it adds in the data and zooms to the location with the push of a button. When the tool is given a new pair of coordinates, it removes the tiger roads from the previous use to reduce clutter. It also takes the coordinate data in its natural order Lat/Long, rather than having to flip the order so that QGIS can zoom to it. This tool allowed me a more effecient workflow.'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'tr',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 362
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 363
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('iframe', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.example, src: 'https://www.youtube.com/embed/cJJdalTgbvI', frameBorder: '0', allowFullScreen: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 363
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'td',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 364
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('iframe', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.example, src: 'https://www.youtube.com/embed/YeyQzjSMYS4', frameBorder: '0', allowFullScreen: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 364
                      },
                      __self: this
                    })
                  )
                )
              )
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 369
              },
              __self: this
            }),
            this.state.selectedProject === 'projcsharpproj' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 373
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 374
                  },
                  __self: this
                },
                'C# .NET Project'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 375
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 376
                    },
                    __self: this
                  },
                  'My C# project.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://45.55.1.236:3007', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 380
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 381
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/bigwaterconsulting/ost_dashboard_demo.git', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 383
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 383
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 383
                },
                __self: this
              })
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 386
              },
              __self: this
            }),
            this.state.selectedProject === 'projexplodingninja' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 390
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 391
                  },
                  __self: this
                },
                'Exploding Ninja'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 392
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 393
                    },
                    __self: this
                  },
                  'This project was made in a group at the conclusion of the MEAN stack for Coding Dojo. The goal of this project is to adapt the popular board game \u201CExploding Kittens\u201D into a playable web application. We want players to be able to invite friends and play with them. We chose to build this application using socket.io to allow for instant interaction between players. The front end is Javascript and the backend is Node and Socket.io. Every interaction with the game board is sent back to a server and emitted out to every other player.'
                ),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 401
                    },
                    __self: this
                  },
                  'The challange with this project was that the socket listeners and emitters were all on the same file. In hindsight we should have modularized this out. This made using this project with git very difficult since all members of the group were editing the same two files. We learned how important bieng able to modularize your code out when working in groups.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'http://34.217.31.200/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 407
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 408
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: 'https://github.com/samkguerrero/exploding_ninjas', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 409
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 410
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 410
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 410
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.voiceassistanttable, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 411
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode1.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 412
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode2.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 413
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode3.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 414
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode4.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 415
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode5.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 416
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode6.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 417
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode7.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 418
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode8.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 419
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explode9.png', alt: 'Smiley face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                  },
                  __self: this
                })
              )
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 424
              },
              __self: this
            }),
            this.state.selectedProject === 'projangularproj' ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 428
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projectTitle, id: 'dash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 429
                  },
                  __self: this
                },
                'Angular'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projecttext, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 430
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 431
                    },
                    __self: this
                  },
                  'My Angular project.'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: '#projects', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 435
                  },
                  __self: this
                },
                'Check out the live example.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 436
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.link, href: '#projects', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 437
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa__["FaGithub"], { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.staticon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 438
                  },
                  __self: this
                }),
                'See the Code.'
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 438
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 438
                },
                __self: this
              })
            ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              },
              __self: this
            })
          ) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.emptyDiv, __source: {
              fileName: _jsxFileName,
              lineNumber: 445
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.namePlate, __source: {
              fileName: _jsxFileName,
              lineNumber: 450
            },
            __self: this
          },
          'Projects'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'table',
          { className: this.state.showCasingProject === "Yes" ? __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projgridHide : __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projgrid, __source: {
              fileName: _jsxFileName,
              lineNumber: 451
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'thead',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 452
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 453
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'th',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 454
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 455
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/JavaScript.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 456
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/HTML.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 457
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/CSS.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 458
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/jQuery.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 459
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/ajax.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 460
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/bootstrap.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 461
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'th',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 464
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 465
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/react.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 466
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/expressjs.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 467
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/nodejs.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 468
                    },
                    __self: this
                  })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'tbody',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 473
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 474
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 475
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 476
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 477
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 478
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/lovecraft.jpg', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 479
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projlovecraft', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 480
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projlovecraft', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 481
                            },
                            __self: this
                          },
                          'The World of Lovecraft Webmap'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 485
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 486
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/leafletflickr.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 487
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projflickrleaflet', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 488
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projflickrleaflet', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 489
                            },
                            __self: this
                          },
                          'Flickr API ',
                          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 489
                            },
                            __self: this
                          }),
                          '+',
                          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 489
                            },
                            __self: this
                          }),
                          ' Leaflet Webmapping'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 493
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 494
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/dataviz.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 495
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projdataviz', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 496
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projdataviz', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 497
                            },
                            __self: this
                          },
                          'Data Visualization and Tracking'
                        )
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 503
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 504
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 505
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 506
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/mixology.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 507
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projmixology', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 508
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projmixology', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 509
                            },
                            __self: this
                          },
                          'Mixologylab.io'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 513
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 514
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/myprofile.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 515
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projmyprofile', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 516
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projmyprofile', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 517
                            },
                            __self: this
                          },
                          'My Profile'
                        )
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 524
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 525
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 526
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/python.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 527
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/django.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 528
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/sqlite.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 529
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 532
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 533
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/csharp.jpg', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 534
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/c-sharp.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 535
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/mysql.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 536
                    },
                    __self: this
                  })
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 540
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 541
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 542
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 543
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 544
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/voiceassistant.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 545
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projvoiceassistant', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 546
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projvoiceassistant', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 547
                            },
                            __self: this
                          },
                          'Voice Assistant'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 551
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 552
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/addzoom.jpg', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 553
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projaddzoom', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 554
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projaddzoom', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 555
                            },
                            __self: this
                          },
                          'QGIS Addandzoom Plugin'
                        )
                      )
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 561
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 562
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 563
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 564
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/ride.jpg', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 565
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projcsharpproj', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 566
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projcsharpproj', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 567
                            },
                            __self: this
                          },
                          'C# PROJECT'
                        )
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 574
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 575
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 576
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/MEAN.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 577
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/mongodb.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 578
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/expressjs.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 579
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/angular.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 580
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/nodejs.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 581
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/materialize.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 582
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.iconrowimg, src: '/images/socket.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 583
                    },
                    __self: this
                  })
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'tr',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 587
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'td',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 588
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.projrow, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 589
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 590
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 591
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/explodingninja.png', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 592
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projexplodingninja', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 593
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projexplodingninja', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 594
                            },
                            __self: this
                          },
                          'Exploding Kittens Using Socket.io'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.tabi, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 598
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                      'div',
                      { className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.container, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 599
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('img', { src: '/images/ride.jpg', alt: 'Smiley face', className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.image, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 600
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                        'a',
                        { id: 'projangularproj', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.overlay, href: '#projects', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 601
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                          'div',
                          { id: 'projangularproj', onClick: this.showProject, className: __WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a.text, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 602
                            },
                            __self: this
                          },
                          'MEAN Project'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Projects;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Projects.propTypes = {
  selectedProject: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,
  showCasingProject: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_8_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_10__Projects_css___default.a)(Projects);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Title_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Title_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Title_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/components/Title/Title.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';




var Title = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Title, _React$Component);

  function Title() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Title);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Title.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Title)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Title, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Title_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__Title_css___default.a.background, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_7__Title_css___default.a.myFace, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_7__Title_css___default.a.namePlate, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              'Sam Guerrero'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            { className: __WEBPACK_IMPORTED_MODULE_7__Title_css___default.a.kicker, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            'Software Developer'
          )
        )
      );
    }
  }]);

  return Title;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Title_css___default.a)(Title);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(9);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return 'https:' + url;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return 'http://' + __WEBPACK_IMPORTED_MODULE_2__config__["e" /* host */] + url;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true }
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }

}, {

  indexes: [{ fields: ['email'] }]

});

/* harmony default export */ __webpack_exports__["a"] = User;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }

});

/* harmony default export */ __webpack_exports__["a"] = UserClaim;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }

});

/* harmony default export */ __webpack_exports__["a"] = UserLogin;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }

});

/* harmony default export */ __webpack_exports__["a"] = UserProfile;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_UserType__ = __webpack_require__(56);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var me = {
  type: __WEBPACK_IMPORTED_MODULE_0__types_UserType__["a" /* default */],
  resolve: function resolve(_ref) {
    var request = _ref.request;

    return request.user && {
      id: request.user.id,
      email: request.user.email
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = me;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(55);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// React.js News Feed (RSS)
var url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

var items = [];
var lastFetchTask = void 0;
var lastFetchTime = new Date(1970, 0, 1);

var news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve: function resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
        lastFetchTime = new Date();
        lastFetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        }).finally(function () {
          lastFetchTask = null;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};

/* harmony default export */ __webpack_exports__["a"] = news;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    link: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    author: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    pubDate: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    content: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  }
});

/* harmony default export */ __webpack_exports__["a"] = NewsItemType;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var UserType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  fields: {
    id: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"]) },
    email: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  }
});

/* harmony default export */ __webpack_exports__["a"] = UserType;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NotFound_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__NotFound_css__);





var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(NotFound, _React$Component);

  function NotFound() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, NotFound);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NotFound.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(NotFound)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__NotFound_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_7__NotFound_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_5_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__NotFound_css___default.a)(NotFound);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(57);
var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = {

  path: '*',

  action: function action() {
    return {
      title: title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Home__ = __webpack_require__(44);


var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/routes/report/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = {

  path: '/',

  action: function action() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', {
                title: 'Sam Guerrero',
                component: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Home__["a" /* default */], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: _this
                  })
                )
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.AboutMe-namePlate-2Pb14 {\n  color: #14425d;\n}\n\n.AboutMe-root-2Ws3a {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.AboutMe-aboutmetext-3J-Fu {\n  max-width: 1000px;\n  padding: 0 15px;\n  margin: 25px auto;\n  margin-top: 10px;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: left;\n}\n\n.AboutMe-link-3Kz97 {\n  color: rgba(20, 66, 93, 1);\n  text-decoration: none;\n}\n\n.AboutMe-link-3Kz97:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n/* .printFriendly {\n  color: #add8e6;\n  border-style: solid;\n  padding: 5px;\n  display: inline-block;\n  margin-right: -90%;\n}\n\n.printIcon {\n  width: 30px;\n  height: 30px;\n} */\n", "", {"version":3,"sources":["/./components/AboutMe/AboutMe.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;CAClB;;AAED;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;;AAED;EACE,2BAA2B;EAC3B,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B;;AAED;;;;;;;;;;;IAWI","file":"AboutMe.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.namePlate {\n  color: #14425d;\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.aboutmetext {\n  max-width: 1000px;\n  padding: 0 15px;\n  margin: 25px auto;\n  margin-top: 10px;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: left;\n}\n\n.link {\n  color: rgba(20, 66, 93, 1);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n/* .printFriendly {\n  color: #add8e6;\n  border-style: solid;\n  padding: 5px;\n  display: inline-block;\n  margin-right: -90%;\n}\n\n.printIcon {\n  width: 30px;\n  height: 30px;\n} */\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"namePlate": "AboutMe-namePlate-2Pb14",
	"root": "AboutMe-root-2Ws3a",
	"aboutmetext": "AboutMe-aboutmetext-3J-Fu",
	"link": "AboutMe-link-3Kz97"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Contact-faceblock-FlSvc {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 15px;\n}\n\n.Contact-infoblock-22CC3 {\n  margin-top: -25px;\n  display: inline-block;\n  vertical-align: top;\n  text-align: left !important;\n\n}\n\n.Contact-cartoon-34ucf {\n  margin-left: -15px;\n  margin-bottom: -15px;\n  margin-top: -15px;\n}\n\n.Contact-contactemail-1b9Te {\n  margin-bottom: 15px;\n}\n\n.Contact-namePlate-1dvlO {\n  color: #14425d;\n}\n\n.Contact-block-1EPGd {\n  margin: 0px auto;\n}\n\n.Contact-root-2wB-N {\n  margin-bottom: 0;\n}\n\n.Contact-icons-j7rb_ {\n  display: inline-block;\n}\n\n.Contact-container-oongZ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  color: #14425d;\n  text-align: left;\n}\n\n.Contact-staticon2-WI6Nf {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-left: 11px;\n}\n\n.Contact-staticon1-uFGNq {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-left: -3px;\n}\n\n.Contact-staticon1-uFGNq:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Contact-staticon2-WI6Nf:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Contact-link-1sn9_ {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Contact-link-1sn9_ {\n  color: #14425d;\n}\n\n.Contact-link-1sn9_:hover {\n  color: rgba(147, 147, 147, 1);\n}\n", "", {"version":3,"sources":["/./components/Contact/Contact.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADlBD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;CACpB;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAoB;EACpB,4BAA4B;;CAE7B;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,8BAA8B;CAC/B","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n\n.faceblock {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 15px;\n}\n\n.infoblock {\n  margin-top: -25px;\n  display: inline-block;\n  vertical-align: top;\n  text-align: left !important;\n\n}\n\n.cartoon {\n  margin-left: -15px;\n  margin-bottom: -15px;\n  margin-top: -15px;\n}\n\n.contactemail {\n  margin-bottom: 15px;\n}\n\n.namePlate {\n  color: #14425d;\n}\n\n.block {\n  margin: 0px auto;\n}\n\n.root {\n  margin-bottom: 0;\n}\n\n.icons {\n  display: inline-block;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  color: #14425d;\n  text-align: left;\n}\n\n.staticon2 {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-left: 11px;\n}\n\n.staticon1 {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-left: -3px;\n}\n\n.staticon1:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.staticon2:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.link {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link {\n  color: #14425d;\n}\n\n.link:hover {\n  color: rgba(147, 147, 147, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"faceblock": "Contact-faceblock-FlSvc",
	"infoblock": "Contact-infoblock-22CC3",
	"cartoon": "Contact-cartoon-34ucf",
	"contactemail": "Contact-contactemail-1b9Te",
	"namePlate": "Contact-namePlate-1dvlO",
	"block": "Contact-block-1EPGd",
	"root": "Contact-root-2wB-N",
	"icons": "Contact-icons-j7rb_",
	"container": "Contact-container-oongZ",
	"staticon2": "Contact-staticon2-WI6Nf",
	"staticon1": "Contact-staticon1-uFGNq",
	"link": "Contact-link-1sn9_"
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Footer-root-3Jihw {\n  background: #333;\n  color: #fff;\n  text-align: center;\n  background-image: url(/images/background1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat, no-repeat;\n  background-position: center, center;\n  padding: 15px;\n}\n\n.Footer-container-n1bVC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./components/Footer/Footer.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,+CAA+C;EAC/C,uBAAuB;EACvB,wCAAwC;EACxC,oCAAoC;EACpC,cAAc;CACf;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n  text-align: center;\n  background-image: url(/images/background1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat, no-repeat;\n  background-position: center, center;\n  padding: 15px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "Footer-root-3Jihw",
	"container": "Footer-container-n1bVC"
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Header-root-3Gi4A {\n  background: #14425d;\n  color: #fff;\n  width: 100%;\n  margin-top: 0;\n}\n\n.Header-container-1rGbt {\n  margin: 0 auto;\n  padding: 15px 0;\n}\n\n.Header-nav-1zCyG {\n  margin: 0 auto;\n  padding-right: 25px;\n}\n", "", {"version":3,"sources":["/./components/Header/Header.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,cAAc;CACf;;AAED;EACE,eAAe;EACf,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,oBAAoB;CACrB","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #61dafb;\n}\n\n.root {\n  background: #14425d;\n  color: #fff;\n  width: 100%;\n  margin-top: 0;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 15px 0;\n}\n\n.nav {\n  margin: 0 auto;\n  padding-right: 25px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "Header-root-3Gi4A",
	"container": "Header-container-1rGbt",
	"nav": "Header-nav-1zCyG"
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home-root-3rK2B {\n  text-align: center;\n  margin-top: 0;\n  background-color: #d3d3d3;\n}\n\n/* .printFriendly {\n  color: #add8e6;\n  border-style: solid;\n  padding: 5px;\n  display: inline-block;\n  margin-right: -90%;\n}\n\n.printIcon {\n  width: 30px;\n  height: 30px;\n} */\n", "", {"version":3,"sources":["/./components/Home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,cAAc;EACd,0BAA0B;CAC3B;;AAED;;;;;;;;;;;IAWI","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  text-align: center;\n  margin-top: 0;\n  background-color: #d3d3d3;\n}\n\n/* .printFriendly {\n  color: #add8e6;\n  border-style: solid;\n  padding: 5px;\n  display: inline-block;\n  margin-right: -90%;\n}\n\n.printIcon {\n  width: 30px;\n  height: 30px;\n} */\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "Home-root-3rK2B"
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::-webkit-scrollbar {\n  width: 10px;  /* for vertical scrollbars */\n  height: 20px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: #14425d;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADjcD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,YAAY,EAAE,6BAA6B;EAC3C,aAAa,CAAC,+BAA+B;CAC9C;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::-webkit-scrollbar {\n  width: 10px;  /* for vertical scrollbars */\n  height: 20px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: #14425d;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-Kev6U {\n  margin: 0;\n}\n\n.Navigation-icons-3F4FY {\n  display: inline-block;\n}\n\n.Navigation-links-2E3Rb {\n  display: inline-block;\n  float: right;\n  margin-top: 5px;\n}\n\n.Navigation-link-1-rhI {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-1-rhI {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-link-1-rhI:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Navigation-staticon-YAboV {\n  color: #fff;\n  width: 35px;\n  height: 35px;\n}\n\n.Navigation-staticon-YAboV:hover {\n  color: rgba(147, 147, 147, 1);\n}\n", "", {"version":3,"sources":["/./components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;CACd;;AAED;EACE,8BAA8B;CAC/B","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  margin: 0;\n}\n\n.icons {\n  display: inline-block;\n}\n\n.links {\n  display: inline-block;\n  float: right;\n  margin-top: 5px;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link {\n  color: rgba(255, 255, 255, 1);\n}\n\n.link:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.staticon {\n  color: #fff;\n  width: 35px;\n  height: 35px;\n}\n\n.staticon:hover {\n  color: rgba(147, 147, 147, 1);\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "Navigation-root-Kev6U",
	"icons": "Navigation-icons-3F4FY",
	"links": "Navigation-links-2E3Rb",
	"link": "Navigation-link-1-rhI",
	"staticon": "Navigation-staticon-YAboV"
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Projects-projwrapper-1bM4p {\n  width: 100%;\n  text-align: left;\n  margin: 10px;\n  background-color: green;\n}\n\n.Projects-iconrow-1-z4s {\n  text-align: left;\n  margin: 2px 2px 2px 20px;\n}\n\n.Projects-iconrowimg-FB7Cr {\n  width: 65px;\n  height: 65px;\n  margin: 8px;\n}\n\n.Projects-projrow-2nnCz {\n  margin-left: 20px;  \n  text-align: left !important;\n}\n\n.Projects-projgrid-3FTTG {\n  /* background-color: pink; */\n  margin: 0 auto;\n  opacity: 1;\n}\n\n.Projects-projgridHide-wOjAe {\n  /* background-color: pink; */\n  margin: 0 auto;\n  -webkit-transition: 1s ease;\n  transition: 1s ease;\n  opacity: 0;\n}\n\n.Projects-projgrid-3FTTG td {\n  /* background-color: red; */\n  padding: 10px;\n}\n\n.Projects-projgrid-3FTTG th {\n  /* background-color: blue; */\n  padding: 10px;\n}\n\n.Projects-showcaseProject-3eU3r {\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n  -webkit-transition: 1s ease;\n  transition: 1s ease;\n  background-color: #fff;\n  z-index: 1;\n  padding-bottom: 250px;\n}\n\n.Projects-showcaseProjectHide-wNl-N {\n  opacity: 0;\n  -webkit-transition: 1s ease;\n  transition: 1s ease;\n  display: none;\n  /* position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  transition: 0.5s ease;\n  background-color: #14425d; */\n}\n\n.Projects-backbutton-2HE7G {\n  color: #14425d;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  /* position: fixed; */\n  /* left: 0; */\n}\n\n.Projects-backbutton-2HE7G:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Projects-emptyDiv-1fVUq {\n  display: none;\n}\n\n/*\n\n\n\n\n*/\n\n.Projects-namePlate-29Cf5 {\n  color: #14425d;\n}\n\n.Projects-tabi-2PG2H {\n  border: none !important;\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n  margin: 5px !important;\n}\n\n.Projects-root-1lxTD {\n  text-align: center;\n  margin-top: 15px;\n  background-color: #fff;\n  padding-bottom: 25px;\n}\n\n.Projects-projectTitle-2N6GW {\n  color: #14425d;\n  line-height: 1;\n  letter-spacing: 0.05em;\n}\n\n.Projects-projecttext-f78Cq {\n  max-width: 500px;\n  padding: 0 15px;\n  margin: 0 auto;\n  margin-top: 10px;\n  margin-bottom: -5px;\n  text-align: center;\n  font-weight: 300;\n}\n\n.Projects-link-2F9fK {\n  color: rgba(20, 66, 93, 1);\n  text-decoration: none;\n}\n\n.Projects-link-2F9fK:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Projects-staticon-WwDOA {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.Projects-staticon-WwDOA:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.Projects-container-3SE1f {\n  position: relative;\n  width: 100%;\n}\n\n.Projects-image-4Y12K {\n  display: block;\n  width: 300px;\n  height: 190px;\n}\n\n.Projects-overlay-mHnuu {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  background-color: #14425d;\n}\n\n.Projects-container-3SE1f:hover .Projects-overlay-mHnuu {\n  opacity: 1;\n}\n\n.Projects-text-1HxO9 {\n  color: white;\n  font-size: 18px;\n  font-weight: lighter;\n  line-height: 1.2;\n  font-family: 'Helvetica';\n  position: absolute;\n  text-decoration: none;\n  text-transform: uppercase;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.Projects-addzoomtbl-29UaD {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\n.Projects-addzoomtbl-29UaD th {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 300;\n  width: 50%;\n  color: #14425d;\n}\n\n.Projects-addzoomtbl-29UaD table th {\n  border: 1px solid #14425d;\n}\n\n.Projects-addzoomtbl-29UaD td {\n  border: 1px solid #14425d;\n}\n\n.Projects-workflow-1nENV {\n  font-size: 14px;\n  padding: 15px;\n}\n\n.Projects-example-lMWHA {\n  width: 100%;\n  height: 500px;\n}\n\n.Projects-nonlistworkflow-3R2AP {\n  text-align: center;\n}\n\n.Projects-nonlistworkflowtitle-2ILiI {\n  text-align: center;\n  color: #14425d;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n\n@media screen and (max-width: 875px) {\n  .Projects-example-lMWHA {\n    height: 450px;\n  }\n}\n\n@media screen and (max-width: 577px) {\n  .Projects-example-lMWHA {\n    height: 300px;\n  }\n}\n\n@media screen and (max-width: 466px) {\n  .Projects-example-lMWHA {\n    height: 250px;\n    width: 90%;\n  }\n\n  th {\n    font-size: 10px;\n  }\n\n  .Projects-workflow-1nENV {\n    font-size: 10px;\n  }\n\n  .Projects-nonlistworkflow-3R2AP {\n    font-size: 10px;\n  }\n}\n\niframe #Projects-document-3uw9i {\n  margin: 100px;\n}\n\n.Projects-addzoomUL-1cUX8 {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.Projects-addzoomUL-1cUX8 li {\n  padding-left: 1em;\n  text-indent: -0.7em;\n}\n\n.Projects-addzoomUL-1cUX8 li::before {\n  content: '\\2022   ';\n  color: #14425d;\n}\n\n.Projects-imgTableWhole-2NsRs {\n  margin: 0 auto;\n  width: 80%;\n}\n\n.Projects-drinkTable-i39Sv {\n  color: #14425d;\n  padding: 5px;\n}\n\n.Projects-imgTable-18Vmq {\n  height: 650px;\n}\n\n.Projects-voiceassistanttable-XgN3u {\n  margin: 20px;\n}\n\n.Projects-voiceassistanttable-XgN3u img {\n  width: 500px;\n  height: 400px;\n  margin: 5px;\n}\n\n.Projects-myproftable-2d6EQ {\n  display: inline-block;\n  margin: 5px;\n  border: 1px solid #14425d;\n}\n\n.Projects-drinkblockpairwrapper-2u-WZ {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.Projects-drinkblockpair-3Z_1g {\n  vertical-align: top;\n  margin: 5px;\n  display: inline-block;\n  text-align: left;\n}\n\n.Projects-drinkTable-i39Sv {\n  max-width: 300px;\n}", "", {"version":3,"sources":["/./components/Projects/Projects.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,wBAAwB;CACzB;;AAED;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,YAAY;EACZ,aAAa;EACb,YAAY;CACb;;AAED;EACE,kBAAkB;EAClB,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,eAAe;EACf,WAAW;CACZ;;AAED;EACE,6BAA6B;EAC7B,eAAe;EACf,4BAAoB;EAApB,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,4BAA4B;EAC5B,cAAc;CACf;;AAED;EACE,6BAA6B;EAC7B,cAAc;CACf;;AAED;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,4BAAoB;EAApB,oBAAoB;EACpB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;CACvB;;AAED;EACE,WAAW;EACX,4BAAoB;EAApB,oBAAoB;EACpB,cAAc;EACd;;;;;+BAK6B;CAC9B;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,cAAc;CACf;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,cAAc;CACf;;AAED;;;;;EAKE;;AAEF;EACE,eAAe;CAChB;;AAED;EACE,wBAAwB;EACxB,uCAAgC;EAAhC,wCAAgC;EAAhC,uCAAgC;EAAhC,gCAAgC;EAChC,uBAAuB;CACxB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;CACtB;;AAED;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;CACxB;;AAED;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;CAClB;;AAED;EACE,2BAA2B;EAC3B,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,eAAe;EACf,aAAa;EACb,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,aAAa;EACb,YAAY;EACZ,WAAW;EACX,8BAAsB;EAAtB,sBAAsB;EACtB,0BAA0B;CAC3B;;AAED;EACE,WAAW;CACZ;;AAED;EACE,aAAa;EACb,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,sBAAsB;EACtB,0BAA0B;EAC1B,SAAS;EACT,UAAU;EACV,yCAAiC;UAAjC,iCAAiC;EACjC,qCAAqC;CACtC;;AAED;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,eAAe;CAChB;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,gBAAgB;EAChB,cAAc;CACf;;AAED;EACE,YAAY;EACZ,cAAc;CACf;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;CAClB;;AAED;EACE;IACE,cAAc;GACf;CACF;;AAED;EACE;IACE,cAAc;GACf;CACF;;AAED;EACE;IACE,cAAc;IACd,WAAW;GACZ;;EAED;IACE,gBAAgB;GACjB;;EAED;IACE,gBAAgB;GACjB;;EAED;IACE,gBAAgB;GACjB;CACF;;AAED;EACE,cAAc;CACf;;AAED;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;CACX;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,oBAAc;EACd,eAAe;CAChB;;AAED;EACE,eAAe;EACf,WAAW;CACZ;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,cAAc;CACf;;AAED;EACE,aAAa;CACd;;AAED;EACE,aAAa;EACb,cAAc;EACd,YAAY;CACb;;AAID;EACE,sBAAsB;EACtB,YAAY;EACZ,0BAA0B;CAC3B;;AAED;EACE,WAAW;EACX,eAAe;CAChB;;AAED;EACE,oBAAoB;EACpB,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB","file":"Projects.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.projwrapper {\n  width: 100%;\n  text-align: left;\n  margin: 10px;\n  background-color: green;\n}\n\n.iconrow {\n  text-align: left;\n  margin: 2px 2px 2px 20px;\n}\n\n.iconrowimg {\n  width: 65px;\n  height: 65px;\n  margin: 8px;\n}\n\n.projrow {\n  margin-left: 20px;  \n  text-align: left !important;\n}\n\n.projgrid {\n  /* background-color: pink; */\n  margin: 0 auto;\n  opacity: 1;\n}\n\n.projgridHide {\n  /* background-color: pink; */\n  margin: 0 auto;\n  transition: 1s ease;\n  opacity: 0;\n}\n\n.projgrid td {\n  /* background-color: red; */\n  padding: 10px;\n}\n\n.projgrid th {\n  /* background-color: blue; */\n  padding: 10px;\n}\n\n.showcaseProject {\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n  transition: 1s ease;\n  background-color: #fff;\n  z-index: 1;\n  padding-bottom: 250px;\n}\n\n.showcaseProjectHide {\n  opacity: 0;\n  transition: 1s ease;\n  display: none;\n  /* position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  transition: 0.5s ease;\n  background-color: #14425d; */\n}\n\n.backbutton {\n  color: #14425d;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  /* position: fixed; */\n  /* left: 0; */\n}\n\n.backbutton:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.emptyDiv {\n  display: none;\n}\n\n/*\n\n\n\n\n*/\n\n.namePlate {\n  color: #14425d;\n}\n\n.tabi {\n  border: none !important;\n  display: inline-flex !important;\n  margin: 5px !important;\n}\n\n.root {\n  text-align: center;\n  margin-top: 15px;\n  background-color: #fff;\n  padding-bottom: 25px;\n}\n\n.projectTitle {\n  color: #14425d;\n  line-height: 1;\n  letter-spacing: 0.05em;\n}\n\n.projecttext {\n  max-width: 500px;\n  padding: 0 15px;\n  margin: 0 auto;\n  margin-top: 10px;\n  margin-bottom: -5px;\n  text-align: center;\n  font-weight: 300;\n}\n\n.link {\n  color: rgba(20, 66, 93, 1);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.staticon {\n  color: #14425d;\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.staticon:hover {\n  color: rgba(147, 147, 147, 1);\n}\n\n.container {\n  position: relative;\n  width: 100%;\n}\n\n.image {\n  display: block;\n  width: 300px;\n  height: 190px;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #14425d;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 18px;\n  font-weight: lighter;\n  line-height: 1.2;\n  font-family: 'Helvetica';\n  position: absolute;\n  text-decoration: none;\n  text-transform: uppercase;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.addzoomtbl {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\n.addzoomtbl th {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 300;\n  width: 50%;\n  color: #14425d;\n}\n\n.addzoomtbl table th {\n  border: 1px solid #14425d;\n}\n\n.addzoomtbl td {\n  border: 1px solid #14425d;\n}\n\n.workflow {\n  font-size: 14px;\n  padding: 15px;\n}\n\n.example {\n  width: 100%;\n  height: 500px;\n}\n\n.nonlistworkflow {\n  text-align: center;\n}\n\n.nonlistworkflowtitle {\n  text-align: center;\n  color: #14425d;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n\n@media screen and (max-width: 875px) {\n  .example {\n    height: 450px;\n  }\n}\n\n@media screen and (max-width: 577px) {\n  .example {\n    height: 300px;\n  }\n}\n\n@media screen and (max-width: 466px) {\n  .example {\n    height: 250px;\n    width: 90%;\n  }\n\n  th {\n    font-size: 10px;\n  }\n\n  .workflow {\n    font-size: 10px;\n  }\n\n  .nonlistworkflow {\n    font-size: 10px;\n  }\n}\n\niframe #document {\n  margin: 100px;\n}\n\n.addzoomUL {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.addzoomUL li {\n  padding-left: 1em;\n  text-indent: -0.7em;\n}\n\n.addzoomUL li::before {\n  content: '• ';\n  color: #14425d;\n}\n\n.imgTableWhole {\n  margin: 0 auto;\n  width: 80%;\n}\n\n.drinkTable {\n  color: #14425d;\n  padding: 5px;\n}\n\n.imgTable {\n  height: 650px;\n}\n\n.voiceassistanttable {\n  margin: 20px;\n}\n\n.voiceassistanttable img {\n  width: 500px;\n  height: 400px;\n  margin: 5px;\n}\n\n\n\n.myproftable {\n  display: inline-block;\n  margin: 5px;\n  border: 1px solid #14425d;\n}\n\n.drinkblockpairwrapper {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.drinkblockpair {\n  vertical-align: top;\n  margin: 5px;\n  display: inline-block;\n  text-align: left;\n}\n\n.drinkTable {\n  max-width: 300px;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"projwrapper": "Projects-projwrapper-1bM4p",
	"iconrow": "Projects-iconrow-1-z4s",
	"iconrowimg": "Projects-iconrowimg-FB7Cr",
	"projrow": "Projects-projrow-2nnCz",
	"projgrid": "Projects-projgrid-3FTTG",
	"projgridHide": "Projects-projgridHide-wOjAe",
	"showcaseProject": "Projects-showcaseProject-3eU3r",
	"showcaseProjectHide": "Projects-showcaseProjectHide-wNl-N",
	"backbutton": "Projects-backbutton-2HE7G",
	"emptyDiv": "Projects-emptyDiv-1fVUq",
	"namePlate": "Projects-namePlate-29Cf5",
	"tabi": "Projects-tabi-2PG2H",
	"root": "Projects-root-1lxTD",
	"projectTitle": "Projects-projectTitle-2N6GW",
	"projecttext": "Projects-projecttext-f78Cq",
	"link": "Projects-link-2F9fK",
	"staticon": "Projects-staticon-WwDOA",
	"container": "Projects-container-3SE1f",
	"image": "Projects-image-4Y12K",
	"overlay": "Projects-overlay-mHnuu",
	"text": "Projects-text-1HxO9",
	"addzoomtbl": "Projects-addzoomtbl-29UaD",
	"workflow": "Projects-workflow-1nENV",
	"example": "Projects-example-lMWHA",
	"nonlistworkflow": "Projects-nonlistworkflow-3R2AP",
	"nonlistworkflowtitle": "Projects-nonlistworkflowtitle-2ILiI",
	"document": "Projects-document-3uw9i",
	"addzoomUL": "Projects-addzoomUL-1cUX8",
	"imgTableWhole": "Projects-imgTableWhole-2NsRs",
	"drinkTable": "Projects-drinkTable-i39Sv",
	"imgTable": "Projects-imgTable-18Vmq",
	"voiceassistanttable": "Projects-voiceassistanttable-XgN3u",
	"myproftable": "Projects-myproftable-2d6EQ",
	"drinkblockpairwrapper": "Projects-drinkblockpairwrapper-2u-WZ",
	"drinkblockpair": "Projects-drinkblockpair-3Z_1g"
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Title-background-1tEA1 {\n  text-align: center;\n  background-image: url(/images/background1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat, no-repeat;\n  background-position: center, center;\n  padding: 15px;\n}\n\n.Title-kicker-158tr {\n  text-align: center;\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.Title-myFace-MhMzh {\n  height: 255px;\n  width: 255px;\n  border-radius: 50%;\n  margin: 0 auto;\n  background-position: center center;\n  background-size: 260px;\n  background-image: url(/images/myface.JPG);\n}\n\n.Title-namePlate-1cHBV {\n  text-align: center;\n  color: white;\n  display: inline-block;\n  padding: 0.2em 0.5em;\n  border: white solid 10px;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 12px;\n  margin-top: 20px;\n  line-height: 1.05;\n}\n\n.Title-root-pIA5m {\n  text-align: center;\n  margin-top: 0;\n}\n", "", {"version":3,"sources":["/./components/Title/Title.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,+CAA+C;EAC/C,uBAAuB;EACvB,wCAAwC;EACxC,oCAAoC;EACpC,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,0BAA0B;CAC3B;;AAED;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,mCAAmC;EACnC,uBAAuB;EACvB,0CAA0C;CAC3C;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,cAAc;CACf","file":"Title.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.background {\n  text-align: center;\n  background-image: url(/images/background1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat, no-repeat;\n  background-position: center, center;\n  padding: 15px;\n}\n\n.kicker {\n  text-align: center;\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.myFace {\n  height: 255px;\n  width: 255px;\n  border-radius: 50%;\n  margin: 0 auto;\n  background-position: center center;\n  background-size: 260px;\n  background-image: url(/images/myface.JPG);\n}\n\n.namePlate {\n  text-align: center;\n  color: white;\n  display: inline-block;\n  padding: 0.2em 0.5em;\n  border: white solid 10px;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 12px;\n  margin-top: 20px;\n  line-height: 1.05;\n}\n\n.root {\n  text-align: center;\n  margin-top: 0;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"background": "Title-background-1tEA1",
	"kicker": "Title-kicker-158tr",
	"myFace": "Title-myFace-MhMzh",
	"namePlate": "Title-namePlate-1cHBV",
	"root": "Title-root-pIA5m"
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3whbd {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-1BOHG {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "NotFound-root-3whbd",
	"container": "NotFound-container-1BOHG"
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(60);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./AboutMe.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./AboutMe.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(61);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Contact.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Contact.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(62);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(63);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(64);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(65);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(66);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(67);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Projects.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Projects.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(68);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Title.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./Title.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(70);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/postcss-loader/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_polyfill__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie_parser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_express_jwt__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_express_graphql__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jsonwebtoken__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_dom_server__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_universal_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_pretty_error__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_App__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__routes_error_ErrorPage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routes_error_ErrorPage_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_passport__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__data_models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__data_schema__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__routes__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__assets_json__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__config__ = __webpack_require__(9);






var _jsxFileName = '/Users/samguerrero/Dropbox/codo/oldgit/samkguerreroreact/src/server.js',
    _this = this;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import fulcrum from 'fulcrum-app';

















 // eslint-disable-line import/no-unresolved


var app = __WEBPACK_IMPORTED_MODULE_7_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_7_express___default.a.static(__WEBPACK_IMPORTED_MODULE_6_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_8_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_9_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_9_body_parser___default.a.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_10_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_26__config__["a" /* auth */].jwt.secret,
  credentialsRequired: false,
  getToken: function getToken(req) {
    return req.cookies.id_token;
  }
}));
app.use(__WEBPACK_IMPORTED_MODULE_21__core_passport__["a" /* default */].initialize());

if (true) {
  app.enable('trust proxy');
}
app.get('/login/facebook', __WEBPACK_IMPORTED_MODULE_21__core_passport__["a" /* default */].authenticate('facebook', { scope: ['email', 'user_location'], session: false }));
app.get('/login/facebook/return', __WEBPACK_IMPORTED_MODULE_21__core_passport__["a" /* default */].authenticate('facebook', { failureRedirect: '/login', session: false }), function (req, res) {
  var expiresIn = 60 * 60 * 24 * 180; // 180 days
  var token = __WEBPACK_IMPORTED_MODULE_12_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_26__config__["a" /* auth */].jwt.secret, { expiresIn: expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_11_express_graphql___default()(function (req) {
  return {
    schema: __WEBPACK_IMPORTED_MODULE_23__data_schema__["a" /* default */],
    graphiql: "development" !== 'production',
    rootValue: { request: req },
    pretty: "development" !== 'production'
  };
}));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
    var css, context, route, data, html;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            css = new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_set___default.a();

            // Global (context) variables that can be easily accessed from any React component
            // https://facebook.github.io/react/docs/context.html

            context = {
              // Enables critical path CSS rendering
              // https://github.com/kriasoft/isomorphic-style-loader
              insertCss: function insertCss() {
                for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                  styles[_key] = arguments[_key];
                }

                // eslint-disable-next-line no-underscore-dangle
                styles.forEach(function (style) {
                  return css.add(style._getCss());
                });
              }
            };
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_15_universal_router___default.a.resolve(__WEBPACK_IMPORTED_MODULE_24__routes__["a" /* default */], {
              path: req.path,
              query: req.query
            });

          case 5:
            route = _context.sent;

            if (!route.redirect) {
              _context.next = 9;
              break;
            }

            res.redirect(route.status || 302, route.redirect);
            return _context.abrupt('return');

          case 9:
            data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, route);

            data.children = __WEBPACK_IMPORTED_MODULE_14_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_17__components_App__["a" /* default */],
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: _this
              },
              route.component
            ));
            data.style = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(css)).join('');
            data.scripts = [__WEBPACK_IMPORTED_MODULE_25__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_25__assets_json___default.a.client.js];
            if (__WEBPACK_IMPORTED_MODULE_25__assets_json___default.a[route.chunk]) {
              data.scripts.push(__WEBPACK_IMPORTED_MODULE_25__assets_json___default.a[route.chunk].js);
            }

            html = __WEBPACK_IMPORTED_MODULE_14_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_Html__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, data, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: _this
            })));

            res.status(route.status || 200);
            res.send('<!doctype html>' + html);
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](0);

            next(_context.t0);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 19]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

//
// Error handling
// -----------------------------------------------------------------------------
var pe = new __WEBPACK_IMPORTED_MODULE_16_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  var html = __WEBPACK_IMPORTED_MODULE_14_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_18__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      style: __WEBPACK_IMPORTED_MODULE_20__routes_error_ErrorPage_css___default.a._getCss() // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_14_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send('<!doctype html>' + html);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
__WEBPACK_IMPORTED_MODULE_22__data_models__["a" /* default */].sync().catch(function (err) {
  return console.error(err.stack);
}).then(function () {
  app.listen(__WEBPACK_IMPORTED_MODULE_26__config__["b" /* port */], function () {
    console.log('The server is running at http://localhost:' + __WEBPACK_IMPORTED_MODULE_26__config__["b" /* port */] + '/');
  });
});
/* eslint-enable no-console */

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map