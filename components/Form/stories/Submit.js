"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    onReset: function onReset(event) {
      return console.log(event);
    },
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value;
      return console.log('Submit', value);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true,
    validate: {
      regexp: /^[a-z]/i
    }
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    type: "email",
    required: true
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Employee ID",
    name: "employeeId",
    required: true,
    validate: {
      regexp: /^[0-9]{4,6}$/,
      message: '4-6 digits'
    }
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "subscribe",
    component: _mnetUiBase.CheckBox,
    pad: true,
    label: "Subscribe?"
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "ampm",
    component: _mnetUiBase.RadioButtonGroup,
    pad: true,
    options: ['morning', 'evening']
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Size",
    name: "size",
    component: _mnetUiBase.Select,
    onChange: function onChange(event) {
      return console.log(event);
    },
    options: ['small', 'medium', 'large', 'xlarge']
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Comments",
    name: "comments",
    component: _mnetUiBase.TextArea
  }), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age",
    component: _mnetUiBase.RangeInput,
    pad: true,
    min: 15,
    max: 75
  }), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('All', function () {
  return _react["default"].createElement(Example, null);
});