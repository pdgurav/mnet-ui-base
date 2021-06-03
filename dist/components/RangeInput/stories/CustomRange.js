"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customThemeRangeInput = (0, _utils.deepMerge)(_themes.mnet, {
  global: {
    spacing: '12px'
  },
  rangeInput: {
    track: {
      color: 'accent-2',
      height: '12px',
      extend: function extend() {
        return "border-radius: 10px";
      }
    },
    thumb: {
      color: 'neutral-2'
    }
  }
});

var CustomRangeInput = function CustomRangeInput() {
  var _React$useState = _react["default"].useState(0.4),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customThemeRangeInput
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "large",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Volume, {
    color: "neutral-2"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    width: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.RangeInput, {
    min: 0,
    max: 1,
    step: 0.1,
    value: value,
    onChange: onChange
  }))));
};

(0, _react2.storiesOf)('RangeInput', module).add('Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomRangeInput, null);
});