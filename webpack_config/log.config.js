const { merge } = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (props = {}) => merge({
  devServer: { quiet: true },
  plugins: [new FriendlyErrorsWebpackPlugin()],
},
props);
