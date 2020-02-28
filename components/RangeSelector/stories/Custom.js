"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var customThemeRangeSelector = (0, _utils.deepMerge)(_themes.mnet, {
  global: {
    borderSize: {
      small: '6px'
    },
    edgeSize: {
      small: '13px'
    },
    spacing: '10px',
    colors: {
      control: 'accent-2',
      border: 'brand'
    }
  },
  rangeSelector: {
    background: {
      invert: {
        color: 'brand'
      }
    },
    edge: {
      type: 'bar'
    }
  }
});

var CustomRangeSelector = function CustomRangeSelector(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      rest = _objectWithoutPropertiesLoose(_ref, ["direction"]);

  var _useState = (0, _react.useState)([12, 16]),
      range = _useState[0],
      setRange = _useState[1];

  var onChange = function onChange(values) {
    setRange(values);
  };

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customThemeRangeSelector
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Stack, null, _react["default"].createElement(_mnetUiBase.Box, {
    direction: direction === 'vertical' ? 'column' : 'row',
    justify: "between"
  }, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(function (value) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      key: value,
      width: "xxsmall",
      height: "xxsmall",
      align: "center",
      pad: "small",
      border: false
    }, _react["default"].createElement(_mnetUiBase.Text, {
      style: {
        fontFamily: 'monospace'
      }
    }, value));
  })), _react["default"].createElement(_mnetUiBase.RangeSelector, _extends({
    invert: true,
    direction: direction,
    min: 10,
    max: 20,
    size: "full",
    values: range,
    onChange: onChange
  }, rest)))));
};

(0, _react2.storiesOf)('RangeSelector', module).add('Custom', function () {
  return _react["default"].createElement(CustomRangeSelector, null);
});