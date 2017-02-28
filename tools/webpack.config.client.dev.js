const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const buildPaths = require('./buildPaths');

const webpackDevConfig = {
  entry: {
    app: [
      'babel-polyfill',

      // Activate HMR for React.
      // https://webpack.js.org/guides/hmr-react/
      'react-hot-loader/patch',

      // Bundle the client for webpack-dev-server and connect to the provided
      // endpoint.
      // https://webpack.js.org/guides/hmr-react/
      'webpack-dev-server/client?http://localhost:8080',

      // Bundle the client for hot reloading. 'only-' means to only hot reload
      // for successful updates.
      // https://webpack.js.org/guides/hmr-react/
      'webpack/hot/only-dev-server',

      // The entry point to the app.
      // https://webpack.js.org/guides/hmr-react/
      buildPaths.mainEntryPoint,
    ],
  },

  output: {
    path: buildPaths.output,
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',

  devServer: {
    // Enable HMR on the server.
    // https://webpack.js.org/guides/hmr-react/
    hot: true,

    // Match the output path.
    // https://webpack.js.org/guides/hmr-react/
    contentBase: buildPaths.outputPath,

    // Match the output publicpath.
    // https://webpack.js.org/guides/hmr-react/
    publicPath: buildPaths.publicPath,
  },

  // Adapted from Vue template.
  plugins: [
    // Enable HMR globally.
    // https://webpack.js.org/guides/hmr-react/
    new webpack.HotModuleReplacementPlugin(),

    // Prints more readable module names in the browser console on HMR updates.
    // https://webpack.js.org/guides/hmr-react/
    new webpack.NamedModulesPlugin(),

    // Do not emit compiled assets that include errors.
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../index.html'),
      inject: true,
    }),
  ],
};

module.exports = webpackMerge(webpackBaseConfig, webpackDevConfig);
