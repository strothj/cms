/* eslint-disable padded-blocks, no-unused-vars */
const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {

    // Ignore unit tests
    config.module.rules.unshift({
      test: /\.spec\.js$/,
      use: ['ignore-loader'],
    });

    return config;
  },
};
