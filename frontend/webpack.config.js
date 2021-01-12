const { merge } = require('webpack-merge');
const ConfigParts = require('./webpack_config/webpack.parts');

module.exports = () => merge(
  ConfigParts.base(),
  ConfigParts.babel(),
  ConfigParts.images(),
  ConfigParts.fonts(),
  ConfigParts.media(),
  ConfigParts.style(),
  ConfigParts.html(),
  ConfigParts.optimization(),
  ConfigParts.devserver(),
  ConfigParts.linters(),
);
