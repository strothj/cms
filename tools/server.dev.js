const runWebpack = require('./runWebpack');
const webpackConfig = require('./webpack.config.server.dev');
const shelljs = require('shelljs');

shelljs.rm('-rf', webpackConfig.output.path);
shelljs.mkdir(webpackConfig.output.path);

runWebpack(webpackConfig, 'server:dev');
