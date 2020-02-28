"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// This story offers a suggested workaround for issue #3209.
var IconItemsMenu = function IconItemsMenu() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Menu, {
    plain: true,
    open: true,
    items: [{
      label: _react["default"].createElement(_mnetUiBase.Box, {
        alignSelf: "center"
      }, "Github"),
      onClick: function onClick() {},
      icon: _react["default"].createElement(_mnetUiBase.Box, {
        pad: "medium"
      }, _react["default"].createElement(_grommetIcons.Github, {
        size: "large"
      }))
    }, {
      label: _react["default"].createElement(_mnetUiBase.Box, {
        alignSelf: "center"
      }, "Slack"),
      onClick: function onClick() {},
      icon: _react["default"].createElement(_mnetUiBase.Box, {
        pad: "medium"
      }, _react["default"].createElement(_grommetIcons.Slack, {
        size: "large"
      }))
    }]
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    gap: "small",
    pad: "large"
  }, _react["default"].createElement(_grommetIcons.FormDown, null), _react["default"].createElement(_mnetUiBase.Text, null, "Menu with Icon on the left")))));
};

(0, _react2.storiesOf)('Menu', module).add('Item with Icon', function () {
  return _react["default"].createElement(IconItemsMenu, null);
});