const { resolve } = require('path');

module.exports = {
  // Absolute paths
  context: resolve(__dirname, '../src'),
  output: resolve(__dirname, '../dist'),
  assets: resolve(__dirname, '../dist/static'),
  indexTemplate: resolve(__dirname, '../index.html'),
  indexOutputFilename: resolve(__dirname, '../dist/index.html'),
  src: resolve(__dirname, '../src'),

  // Relative paths
  mainEntryPoint: './main.js',
  outputFilename: 'static/js/[name].[chunkhash].js',
  outputChunkFilename: 'static/js/[id].[chunkhash].js',
  imgFilename: 'static/img/[name].[hash:7].[ext]',
  fontFilename: 'static/fonts/[name].[hash:7].[ext]',
};
