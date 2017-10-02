"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add babel plugin
exports.modifyBabelrc = function (_ref) {
  var babelrc = _ref.babelrc;

  return (0, _extends3.default)({}, babelrc, {
    plugins: babelrc.plugins.concat([`styled-jsx/babel`])
  });
};