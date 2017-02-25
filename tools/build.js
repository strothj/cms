const webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');
const { mkdir, rm } = require('shelljs');
const buildPaths = require('./buildPaths');

rm('-rf', buildPaths.output);
mkdir(buildPaths.output);

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('[webpack:build]', stats.toString({
    chunks: false,
    colors: true,
  }));
});
