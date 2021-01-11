const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (props = {}) => merge({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        include: path.resolve('src', 'fonts'),
        type: 'asset/resource',
        generator: { filename: 'fonts/[name]/[contenthash:8][ext][query]' },
      },
    ],
  },
},
props);
