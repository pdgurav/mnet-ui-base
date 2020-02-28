import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, MaskedInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var PhoneMaskedInput = function PhoneMaskedInput() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Box, {
    width: "medium"
  }, React.createElement(MaskedInput, {
    mask: [{
      fixed: '('
    }, {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx'
    }, {
      fixed: ')'
    }, {
      fixed: ' '
    }, {
      length: 3,
      regexp: /^[0-9]{1,3}$/,
      placeholder: 'xxx'
    }, {
      fixed: '-'
    }, {
      length: 4,
      regexp: /^[0-9]{1,4}$/,
      placeholder: 'xxxx'
    }],
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

storiesOf('MaskedInput', module).add('Phone', function () {
  return React.createElement(PhoneMaskedInput, null);
});