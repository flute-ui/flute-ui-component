'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var toClassNames = _interopDefault(require('classnames'));

__$styleInject(".UiComponent {\n  position: relative;\n}\n\n.UiComponent--fillParent {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}", undefined);
module.exports = exports["default"];

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WORD_WITH_COLON_PREFIX = /(:[^\s]+)/;
var WORD_WITHOUT_COLON_PREFIX = /^(?!:).+/;

var UiComponent$2 = function (_React$Component) {
  _inherits(UiComponent, _React$Component);

  function UiComponent() {
    _classCallCheck(this, UiComponent);

    return _possibleConstructorReturn(this, (UiComponent.__proto__ || Object.getPrototypeOf(UiComponent)).apply(this, arguments));
  }

  _createClass(UiComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var localProps = this.props;
      var remoteProps = this.props.props || {};

      var _classNameDetailsOf = classNameDetailsOf({
        localClassName: localProps.className,
        remoteClassName: remoteProps.className,
        conditionalClassNames: [localProps.classes, remoteProps.classes]
      }),
          blockName = _classNameDetailsOf.blockName,
          additionalClasses = _classNameDetailsOf.additionalClasses;

      var modifiers = getModsFor({
        blockName: blockName,
        modifiers: remoteProps.kind,
        match: WORD_WITHOUT_COLON_PREFIX
      });

      var rootBlockModifiers = getModsFor({
        blockName: 'UiComponent',
        modifiers: remoteProps.kind,
        match: WORD_WITH_COLON_PREFIX
      });

      var className = cleanClassNames('UiComponent ' + blockName + ' ' + modifiers + ' ' + additionalClasses + ' ' + rootBlockModifiers);

      var tag = remoteProps.as || this.props.as;

      var props = {};

      Object.keys(localProps).forEach(function (key) {
        if (key.startsWith('data-')) {
          props[key] = _this2.props[key];
        }
      });

      props.className = className;

      return React.createElement(tag, props, this.props.children);
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        as: React.PropTypes.any
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        as: 'div'
      };
    }
  }]);

  return UiComponent;
}(React.Component);

function classNameDetailsOf(_ref) {
  var localClassName = _ref.localClassName,
      remoteClassName = _ref.remoteClassName,
      conditionalClassNames = _ref.conditionalClassNames;

  var localNames = typeof localClassName === 'string' ? localClassName.split(' ') : [];

  var additionalLocalClassNames = localNames.length > 1 ? localNames.splice(1, localNames.length).join(' ') : '';

  var additionalRemoteClassNames = remoteClassName === undefined ? '' : remoteClassName;

  return {
    blockName: localNames[0] || '',
    additionalClasses: additionalRemoteClassNames + ' ' + additionalLocalClassNames + ' ' + toClassNames(conditionalClassNames)
  };
}

function cleanClassNames(classNames) {
  return removeExtraSpacesFromCssClassNames(removeDuplicatesFromCssClassNames(classNames));
}

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

function getModsFor(_ref2) {
  var blockName = _ref2.blockName,
      modifiers = _ref2.modifiers,
      match = _ref2.match;


  var mods = [];

  if (modifiers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = modifiers.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var modifier = _step.value;

        if (match.test(modifier)) {
          mods.push(blockName + '--' + modifier.replace(':', ''));
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

  return mods.join(' ');
}
module.exports = exports['default'];

module.exports = exports['default'];

module.exports = UiComponent$2;
//# sourceMappingURL=UiComponent.js.map
