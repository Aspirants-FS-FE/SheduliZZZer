const { merge } = require('webpack-merge');

module.exports = (props = {}) => merge(
  {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  },
  props,
);
