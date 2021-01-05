const { merge } = require('webpack-merge');

module.exports = (props = {}) => merge(
  {
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8192 } },
          generator: { filename: 'media/[name].[contenthash:8][ext][query]' },
        },
      ],
    },
  },
  props,
);
