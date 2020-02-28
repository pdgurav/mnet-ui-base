import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, TextArea } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var FillTextArea = function FillTextArea() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    width: "large",
    height: "medium",
    border: {
      color: 'brand',
      size: 'medium'
    }
  }, React.createElement(TextArea, {
    value: value,
    onChange: onChange,
    fill: true
  })));
};

storiesOf('TextArea', module).add('Fill', function () {
  return React.createElement(FillTextArea, null);
});