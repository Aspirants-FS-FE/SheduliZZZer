const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (props = {}) => merge({
  devServer: {
    contentBase: path.resolve('src'),
    historyApiFallback: true,
    open: true,
    hot: true,
    inline: true,
    compress: true,
    progress: true,
    port: 9000,
  },
  plugins: [new CleanWebpackPlugin()],
},
props);
