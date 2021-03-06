const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (props = {}) => merge({
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { plugins: [{ removeViewBox: false }] }],
          ],
        },
      }),
    ],
  },
},
props);
