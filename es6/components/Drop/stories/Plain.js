function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { createRef, Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Drop, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var PlainDrop =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PlainDrop, _Component);

  function PlainDrop() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "targetRef", createRef());

    return _this;
  }

  var _proto = PlainDrop.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  _proto.render = function render() {
    return React.createElement(MnetUIBase, {
      theme: mnet,
      full: true
    }, React.createElement(Box, {
      background: "brand",
      fill: true,
      align: "center",
      justify: "center"
    }, React.createElement(Box, {
      background: "dark-3",
      pad: "medium",
      align: "center",
      justify: "start",
      ref: this.targetRef
    }, "Target"), this.targetRef.current && React.createElement(Drop, {
      plain: true,
      align: {
        top: 'bottom',
        left: 'left'
      },
      target: this.targetRef.current
    }, React.createElement(Box, {
      pad: "large"
    }, "No background no shadow"))));
  };

  return PlainDrop;
}(Component);

storiesOf('Drop', module).add('Plain', function () {
  return React.createElement(PlainDrop, null);
});