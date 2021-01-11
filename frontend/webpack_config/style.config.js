const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');

module.exports = (props = {}) => merge({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: { flexbox: 'no-2009' },
                      stage: 3,
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
},
props);
