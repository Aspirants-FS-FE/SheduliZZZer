const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (props = {}) => merge(
  {
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /(node_modules)/,
          use: 'htmllint-loader',
        },
        {
          test: /\.html$/,
          exclude: /(node_modules)/,
          use: 'html-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        favicon: './src/img/favicon.jpeg',
      }),
    ],
  },
  props,
);
