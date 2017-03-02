const path = require('path');
const runWebpack = require('./runWebpack');
const webpackConfig = require('./webpack.config.server.prod');
const shelljs = require('shelljs');

const bundlePath = path.join(
  webpackConfig.output.path,
  webpackConfig.output.filename,
);
shelljs.rm('-rf', bundlePath);
shelljs.mkdir(webpackConfig.output.path);

runWebpack(webpackConfig, 'server:production');
