const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: [
    'webpack/hot/poll?1000',
    './src/server/main.js',
  ],
  watch: true,
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000'],
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
};
