"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OnClickItemList = function OnClickItemList() {
  var _React$useState = _react["default"].useState(),
      clicked = _React$useState[0],
      setClicked = _React$useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.List, {
    data: _data.data.slice(0, 10),
    onClickItem: function onClickItem(event) {
      return setClicked(event.item);
    }
  }), clicked && JSON.stringify(clicked, null, 2)));
};

(0, _react2.storiesOf)('List', module).add('onClickItem', function () {
  return _react["default"].createElement(OnClickItemList, null);
});