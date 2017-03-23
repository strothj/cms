/* eslint-disable padded-blocks */

module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { dev }) => {

    // Ignore unit tests
    config.module.rules.unshift({
      test: /\.spec\.js$/,
      use: ['ignore-loader'],
    });

    return config;
  },
};
