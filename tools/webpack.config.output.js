const path = require('path');

const outputs = {
  node: {
    development: {
      // Directory for temporary hot reload development files.
      path: path.resolve(__dirname, '../.tmp'),
      filename: 'server.bundle.js',
    },

    production: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'server.bundle.js',
    },
  },

  web: {
    development: {
      path: path.resolve(__dirname, '../dist/dashboard'),
      filename: 'dashboard.js',
    },

    production: {
      path: path.resolve(__dirname, '../dist/dashboard'),
      filename: 'static/js/[name].[chunkhash].js',
      chunkFilename: 'static/js/[id].[chunkhash].js',
    },
  },
};

module.exports = ({ production, target }) => outputs[target][production ? 'production' : 'development'];
