const { join } = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const buildPaths = require('./buildPaths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackProdConfig = {
  entry: {
    app: ['babel-polyfill', buildPaths.mainEntryPoint],
  },

  output: {
    path: buildPaths.output,
    filename: buildPaths.outputFilename,
    chunkFilename: buildPaths.outputChunkFilename,
  },

  // Adapted from Vue template.
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
    }),

    // Generate dist index.html with correct asset hash for caching.
    // You can customize output by editing /index.html.
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: buildPaths.indexOutputFilename,
      template: buildPaths.indexTemplate,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // More options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // Necessary to consistently work with multiple chunks via
      // CommonsChunkPlugin.
      chunksSortMode: 'dependency',
    }),

    // Split vendor js into its own file.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (
        // Any required modules inside node_modules are extracted out to vendor.
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          join(__dirname, '../node_modules')) === 0
      ),
    }),

    // Extract Webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenver app bundle is updated.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
  ],
};

module.exports = webpackMerge(webpackBaseConfig, webpackProdConfig);
