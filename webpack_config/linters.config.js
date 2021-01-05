const { merge } = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => merge({
  plugins: [
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
});
