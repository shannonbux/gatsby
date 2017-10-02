"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpackLodashPlugin = require(`lodash-webpack-plugin`);

// Add Lodash webpack plugin
exports.modifyWebpackConfig = function (_ref, _ref2) {
  var config = _ref.config,
      stage = _ref.stage;
  var _ref2$disabledFeature = _ref2.disabledFeatures,
      disabledFeatures = _ref2$disabledFeature === undefined ? [] : _ref2$disabledFeature;

  if (stage === `build-javascript`) {
    var features = {
      shorthands: true,
      cloning: true,
      currying: true,
      caching: true,
      collections: true,
      exotics: true,
      guards: true,
      metadata: true,
      deburring: true,
      unicode: true,
      chaining: true,
      memoizing: true,
      coercions: true,
      flattening: true,
      paths: true,
      placeholders: true
    };

    disabledFeatures.forEach(function (feature) {
      delete features[feature];
    });
    config.plugin(`Lodash`, webpackLodashPlugin, [features]);
  }

  return;
};

// Add Lodash Babel plugin
exports.modifyBabelrc = function (_ref3) {
  var babelrc = _ref3.babelrc;

  return (0, _extends3.default)({}, babelrc, {
    plugins: babelrc.plugins.concat([`lodash`])
  });
};