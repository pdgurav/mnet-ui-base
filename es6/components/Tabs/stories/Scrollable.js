import React from 'react';
import { storiesOf } from '@storybook/react';
import { TreeOption } from "grommet-icons/es6/icons/TreeOption";
import { Box, Heading, MnetUIBase, Tab, Tabs } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var ScrollableTabs = function ScrollableTabs() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    full: true
  }, React.createElement(Box, {
    fill: true
  }, React.createElement(Tabs, {
    flex: true
  }, React.createElement(Tab, {
    title: "Tab 1"
  }, React.createElement(Box, {
    fill: true,
    overflow: "auto",
    pad: "xlarge",
    align: "center",
    background: "accent-1"
  }, React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"), React.createElement(Heading, null, "hello!"))), React.createElement(Tab, {
    title: "Tab 2"
  }, React.createElement(Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, React.createElement(TreeOption, {
    size: "xlarge"
  }))))));
};

storiesOf('Tabs', module).add('Scrollable', function () {
  return React.createElement(ScrollableTabs, null);
});