const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPlugins = ({ production, target }) => [
  // Prints more readable module names in the browser console on HMR updates.
  // https://webpack.js.org/guides/hmr-react/
  new webpack.NamedModulesPlugin(),

  // Do not emit compiled assets that include errors.
  new webpack.NoEmitOnErrorsPlugin(),

  // Make build environment easily discoverable.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(production ? 'production' : 'development'),
      BUILD_TARGET: JSON.stringify(target),
    },
  }),
];

const plugins = {
  node: {
    development: [
      // Remove old build files.
      new CleanWebpackPlugin(['.tmp'], { root: path.resolve(__dirname, '..') }),

      // Start server automatically.
      new StartServerPlugin('server.bundle.js'),

      // Enable hot module replacement.
      new webpack.HotModuleReplacementPlugin(),
    ],

    production: [
    ],
  },

  web: {
    development: [
      // Enable HMR globally.
      // https://webpack.js.org/guides/hmr-react/
      new webpack.HotModuleReplacementPlugin(),

      // https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true,
      }),
    ],

    production: [
      // Remove old build files.
      new CleanWebpackPlugin(['dashboard'], { root: path.resolve(__dirname, '../dist') }),

      new webpack.optimize.UglifyJsPlugin({
        warnings: false,
      }),

      // Generate dist index.html with correct asset hash for caching.
      // You can customize output by editing /index.html.
      // https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../dist/dashboard/index.html'),
        template: path.resolve(__dirname, '../index.html'),
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
          // Any required modules inside node_modules are extracted out to
          // vendor.
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.resolve(__dirname, '../node_modules')) === 0
        ),
      }),

      // Extract Webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor'],
      }),
    ],
  },
};

module.exports = ({ production, target }) => [
  ...commonPlugins({ production, target }),
  ...plugins[target][production ? 'production' : 'development'],
];
