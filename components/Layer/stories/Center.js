"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CenterLayer = function CenterLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var _React$useState2 = _react["default"].useState(),
      open2 = _React$useState2[0],
      setOpen2 = _React$useState2[1];

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
  };

  var onOpen2 = function onOpen2() {
    return setOpen2(true);
  };

  var onClose2 = function onClose2() {
    return setOpen2(undefined);
  };

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Trash, null),
    label: _react["default"].createElement(_mnetUiBase.Text, null, _react["default"].createElement("strong", null, "Remove")),
    onClick: onOpen,
    plain: true
  })), open && _react["default"].createElement(_mnetUiBase.Layer, {
    position: "center",
    modal: true,
    onClickOutside: onClose,
    onEsc: onClose
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "small",
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: 3,
    margin: "none"
  }, "Confirm"), _react["default"].createElement(_mnetUiBase.Text, null, "Are you sure you want to delete?"), _react["default"].createElement(_mnetUiBase.Box, {
    as: "footer",
    gap: "small",
    direction: "row",
    align: "center",
    justify: "end",
    pad: {
      top: 'medium',
      bottom: 'small'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Open 2",
    onClick: onOpen2,
    color: "dark-3"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: _react["default"].createElement(_mnetUiBase.Text, {
      color: "white"
    }, _react["default"].createElement("strong", null, "Delete")),
    onClick: onClose,
    primary: true,
    color: "status-critical"
  })))), open2 && _react["default"].createElement(_mnetUiBase.Layer, {
    position: "top",
    modal: true,
    onClickOutside: onClose2,
    onEsc: onClose2
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "small",
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: 3,
    margin: "none"
  }, "Confirm 2"), _react["default"].createElement(_mnetUiBase.Select, {
    options: ['one', 'two', 'three']
  }), _react["default"].createElement(_mnetUiBase.Box, {
    as: "footer",
    gap: "small",
    direction: "row",
    align: "center",
    justify: "end",
    pad: {
      top: 'medium',
      bottom: 'small'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Close",
    onClick: onClose2,
    color: "dark-3"
  })))));
};

(0, _react2.storiesOf)('Layer', module).add('Center', function () {
  return _react["default"].createElement(CenterLayer, null);
});