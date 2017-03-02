const webpack = require('webpack');

module.exports = (webpackConfig, description) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`[webpack:${description}]`, stats.toString({
      chunks: false,
      colors: true,
    }));
  });
};
