const webpack = require('webpack');
const webpackConfig = require('./webpack.config.server.dev');
const shelljs = require('shelljs');

shelljs.rm('-rf', webpackConfig.output.path);
shelljs.mkdir(webpackConfig.output.path);

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('[webpack:server:dev]', stats.toString({
    chunks: false,
    colors: true,
  }));
});
