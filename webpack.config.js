const { merge } = require('webpack-merge');
const ConfigParts = require('./webpack_config/webpack.parts');

module.exports = (env, argv) => {
  const DEV_MODE = argv.mode !== 'production';
  return merge(
    ConfigParts.base(),
    ConfigParts.babel(),
    ConfigParts.images(),
    ConfigParts.fonts(),
    ConfigParts.media(),
    ConfigParts.style({}, DEV_MODE),
    ConfigParts.html(),
    ConfigParts.optimization(),
    ConfigParts.devserver(),
    ConfigParts.linters(),
    ConfigParts.log(),
  );
};
