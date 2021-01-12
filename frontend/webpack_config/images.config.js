const { merge } = require('webpack-merge');

module.exports = (props = {}) => merge({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8192 } },
        generator: { filename: 'img/[name].[contenthash:8][ext][query]' },
      },
    ],
  },
},
props);
