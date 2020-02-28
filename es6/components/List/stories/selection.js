import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, List } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { data } from './data';

var SelectionList = function SelectionList() {
  var _ref;

  var _React$useState = React.useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, React.createElement(List, {
    data: data.slice(0, 10),
    itemProps: selected >= 0 ? (_ref = {}, _ref[selected] = {
      background: 'brand'
    }, _ref) : undefined,
    onClickItem: function onClickItem(event) {
      return setSelected(selected === event.index ? undefined : event.index);
    }
  })));
};

storiesOf('List', module).add('selection', function () {
  return React.createElement(SelectionList, null);
});