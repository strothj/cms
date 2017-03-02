const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Using project's root as base directory.
  // https://webpack.js.org/configuration/entry-context/#context
  context: path.resolve(__dirname, '..'),

  // Using an array to make prepending easy with webpack-merge.
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: [
    './src/server/main.js',
  ],

  // Compile for usage with Node.js.
  // https://webpack.js.org/configuration/target/
  target: 'node',

  plugins: [
    // Prints more readable module names in the browser console on HMR updates.
    // https://webpack.js.org/guides/hmr-react/
    new webpack.NamedModulesPlugin(),

    // Do not emit compiled assets that include errors.
    new webpack.NoEmitOnErrorsPlugin(),

    // Make build environment easily discoverable.
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
      },
    }),
  ],

  module: {
    rules: [
      // Transpile newer language features.
      // Still needed on server to support async/await, spread syntax, etc on
      // Node.js LTS v6.
      // https://github.com/babel/babel-loader
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
