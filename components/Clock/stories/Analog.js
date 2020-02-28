"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AnalogClock = function AnalogClock() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Clock, {
    type: "analog"
  })));
};

(0, _react2.storiesOf)('Clock', module).add('Analog', function () {
  return _react["default"].createElement(AnalogClock, null);
}, {
  chromatic: {
    disable: true
  }
});