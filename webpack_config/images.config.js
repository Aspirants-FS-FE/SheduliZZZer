const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (props = {}) => merge({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        include: path.resolve('src/img'),
        type: 'asset/resource',
        parser: { dataUrlCondition: { maxSize: 8192 } },
        generator: { filename: 'img/[name].[contenthash:8][ext][query]' },
      },
    ],
  },
},
props);
