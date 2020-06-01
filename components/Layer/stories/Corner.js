"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CornerLayer = function CornerLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, "Add Corner Layer")),
    onClick: onOpen,
    plain: true
  })), open && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    position: "top-right",
    onClickOutside: onClose
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    overflow: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "Corner top-right position"))));
};

(0, _react2.storiesOf)('Layer', module).add('Corner', function () {
  return /*#__PURE__*/_react["default"].createElement(CornerLayer, null);
});