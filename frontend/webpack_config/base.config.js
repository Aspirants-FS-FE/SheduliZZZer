const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (props = {}) => merge({
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve('static'),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  optimization: { minimize: false },
},
props);
