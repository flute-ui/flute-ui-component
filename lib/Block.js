(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-block", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-block"] = factory(require("react"));
	else
		root["react-block"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import './Block.scss' // TODO: Uncomment
	
	var Block = function (_React$Component) {
	  _inherits(Block, _React$Component);
	
	  function Block() {
	    _classCallCheck(this, Block);
	
	    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
	  }
	
	  _createClass(Block, [{
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this2 = this;
	
	        var p = this.props.props || {};
	
	        var classNames = typeof this.props.className === 'string' ? this.props.className.split(' ') : [];
	        var blockName = classNames[0] || '';
	
	        var additionalClasses = p.className === undefined ? '' : p.className;
	
	        if (classNames.length > 1) {
	          additionalClasses += ' ' + classNames.splice(1, classNames.length).join(' ');
	        }
	
	        if (this.props.classes) {
	          additionalClasses += ' ';
	
	          if (_typeof(this.props.classes) === 'object') {
	            additionalClasses += (0, _classnames2['default'])(this.props.classes);
	          } else {
	            additionalClasses += this.props.classes;
	          }
	        }
	
	        var modifiers = modsFor(blockName, [p.kind, {
	          prefix: ':',
	          blockName: 'Block'
	        }]);
	
	        var classes = blockName;
	
	        if (modifiers) {
	          classes += ' ' + modifiers;
	        }
	
	        if (additionalClasses) {
	          classes += ' ' + additionalClasses;
	        }
	
	        classes = 'Block ' + classes;
	
	        classes = removeDuplicatesFromCssClassNames(classes);
	
	        classes = removeExtraSpacesFromCssClassNames(classes);
	
	        var tag = p.as || this.props.as;
	
	        var props = {};
	
	        Object.keys(this.props).forEach(function (key) {
	          if (key.startsWith('data-')) {
	            props[key] = _this2.props[key];
	          }
	        });
	
	        props.className = classes;
	
	        return _react2['default'].createElement(tag, props, this.props.children);
	      }
	
	      return render;
	    }()
	  }], [{
	    key: 'propTypes',
	    get: function () {
	      function get() {
	        return {
	          as: _react2['default'].PropTypes.any
	        };
	      }
	
	      return get;
	    }()
	  }, {
	    key: 'defaultProps',
	    get: function () {
	      function get() {
	        return {
	          as: 'div'
	        };
	      }
	
	      return get;
	    }()
	  }]);
	
	  return Block;
	}(_react2['default'].Component);
	
	exports['default'] = Block;
	
	
	function removeDuplicatesFromCssClassNames(value) {
	  var obj = {};
	  value.split(' ').forEach(function (item) {
	    obj[item] = '';
	  });
	  return Object.keys(obj).join(' ');
	}
	
	function removeExtraSpacesFromCssClassNames(classes) {
	  return classes.replace('  ', ' ').trim();
	}
	
	function modsFor(blockName, modMappings) {
	  var mods = [];
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = modMappings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var mapping = _step.value;
	
	      if (mapping) {
	        if (typeof mapping === 'string') {
	          mapping.trim().split(' ').forEach(function (item) {
	            mods.push(blockName + '--' + item);
	          });
	        }
	        //      else if (mapping.value) {
	        //        mods.push(`${blockName}--${mapping.prefix}${mapping.value}`)
	        //      }
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return mods.join(' ');
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;
//# sourceMappingURL=Block.js.map