"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotificationLayer = function NotificationLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
  };

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: _react["default"].createElement(_mnetUiBase.Text, null, _react["default"].createElement("strong", null, "Add")),
    onClick: onOpen,
    plain: true
  })), open && _react["default"].createElement(_mnetUiBase.Layer, {
    position: "bottom",
    modal: false,
    margin: {
      vertical: 'medium',
      horizontal: 'small'
    },
    onEsc: onClose,
    responsive: false,
    plain: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "small",
    justify: "between",
    round: "medium",
    elevation: "medium",
    pad: {
      vertical: 'xsmall',
      horizontal: 'small'
    },
    background: "status-ok"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "xsmall"
  }, _react["default"].createElement(_grommetIcons.StatusGood, null), _react["default"].createElement(_mnetUiBase.Text, null, "A new virtual machine has been successfully added")), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.FormClose, null),
    onClick: onClose,
    plain: true
  }))));
};

(0, _react2.storiesOf)('Layer', module).add('Notification', function () {
  return _react["default"].createElement(NotificationLayer, null);
});