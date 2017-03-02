const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.server.base');

const webpackConfig = {
  entry: [
    // Insert code into application so it polls for updated modules.
    'webpack/hot/poll?1000',
  ],

  // Avoid bundling "node_modules".
  // https://github.com/liady/webpack-node-externals
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000'],
  })],

  // Tell webpack to watch for filesystem changes so it will compile changed
  // files.
  watch: true,

  plugins: [
    // Start server automatically.
    new StartServerPlugin('server.bundle.js'),

    // Enable hot module replacement.
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, '../.build'),
    filename: 'server.bundle.js',
  },
};

const merged = merge(webpackConfigBase, webpackConfig);

module.exports = merged;
