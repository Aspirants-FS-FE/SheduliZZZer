const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (props = {}) => merge({
  module: {
    rules: [
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
    new MiniCssExtractPlugin({ filename: 'css/[name][contenthash:8].css' }),
  ],
},
props);
