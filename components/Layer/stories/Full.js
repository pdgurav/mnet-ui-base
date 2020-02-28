"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FullLayer = function FullLayer() {
  var _React$useState = _react["default"].useState(false),
      showLayer = _React$useState[0],
      setShowLayer = _React$useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    fill: true,
    background: "dark-3",
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    color: "accent-3",
    label: "Show",
    onClick: function onClick() {
      return setShowLayer(true);
    }
  }), showLayer && _react["default"].createElement(_mnetUiBase.Layer, {
    full: true,
    animation: "fadeIn"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    background: "light-4",
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Close",
    onClick: function onClick() {
      return setShowLayer(false);
    }
  })))));
};

(0, _react2.storiesOf)('Layer', module).add('Full', function () {
  return _react["default"].createElement(FullLayer, null);
});