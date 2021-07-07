function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from "grommet-icons/es6/icons/Attraction";
import { Car } from "grommet-icons/es6/icons/Car";
import { TreeOption } from "grommet-icons/es6/icons/TreeOption";
import { MnetUIBase, Box, Carousel } from 'mnet-ui-base';
var customTheme = {
  carousel: {
    animation: {
      duration: 400
    },
    icons: {
      color: 'blue'
    },
    disabled: {
      icons: {
        color: 'grey'
      }
    }
  }
};

var CustomCarousel = function CustomCarousel(_ref) {
  var controls = _ref.controls,
      rest = _objectWithoutPropertiesLoose(_ref, ["controls"]);

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Carousel, _extends({
    controls: controls
  }, rest), /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-1"
  }, /*#__PURE__*/React.createElement(Attraction, {
    size: "xlarge"
  })), /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-2"
  }, /*#__PURE__*/React.createElement(TreeOption, {
    size: "xlarge"
  })), /*#__PURE__*/React.createElement(Box, {
    pad: "xlarge",
    background: "accent-3"
  }, /*#__PURE__*/React.createElement(Car, {
    size: "xlarge"
  })))));
};

storiesOf('Carousel', module).add('Custom Controls', function () {
  return /*#__PURE__*/React.createElement(CustomCarousel, null);
});