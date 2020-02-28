"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleRadioButton = function SimpleRadioButton() {
  var _React$useState = _react["default"].useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};

(0, _react2.storiesOf)('RadioButton', module).add('Simple', function () {
  return _react["default"].createElement(SimpleRadioButton, null);
});