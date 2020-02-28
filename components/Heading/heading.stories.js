"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var H = function H(_ref) {
  var level = _ref.level,
      size = _ref.size;
  return _react["default"].createElement(_mnetUiBase.Heading, {
    level: level,
    size: size
  }, "Heading " + level + " " + size);
};

H.propTypes = {
  level: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].string.isRequired
};

var Set = function Set(_ref2) {
  var size = _ref2.size;
  return _react["default"].createElement("div", null, [1, 2, 3, 4, 5, 6].map(function (level) {
    return _react["default"].createElement(H, {
      key: level,
      level: level,
      size: size
    });
  }));
};

Set.propTypes = {
  size: _propTypes["default"].string.isRequired
};

var All = function All() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    columns: "large",
    gap: "medium"
  }, _react["default"].createElement(Set, {
    size: "medium"
  }), _react["default"].createElement(Set, {
    size: "small"
  }), _react["default"].createElement(Set, {
    size: "large"
  }), _react["default"].createElement(Set, {
    size: "xlarge"
  })));
};

var Color = function Color() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

var customlevel = (0, _utils.deepMerge)(_themes.mnet, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px'
        },
        medium: {
          size: '14px',
          height: '18px'
        },
        large: {
          size: '16px',
          height: '20px'
        }
      }
    },
    extend: function extend(props) {
      return "color: " + props.theme.global.colors.brand;
    }
  }
});

var CustomHeading = function CustomHeading() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customlevel
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: 5
  }, "Heading level 5"));
};

(0, _react2.storiesOf)('Heading', module).add('All', function () {
  return _react["default"].createElement(All, null);
}).add('Color', function () {
  return _react["default"].createElement(Color, null);
}).add('Custom', function () {
  return _react["default"].createElement(CustomHeading, null);
});