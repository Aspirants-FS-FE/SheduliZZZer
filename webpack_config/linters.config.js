const { merge } = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => merge({
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: 'htmllint-loader',
      },
    ],
  },
  plugins: [
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
});
