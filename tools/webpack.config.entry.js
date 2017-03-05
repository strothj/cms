const entries = {
  node: {
    development: [
      // Activate HMR.
      'webpack/hot/poll?1000',

      'babel-polyfill',
      './src/server/main.js',
    ],

    production: [
      'babel-polyfill',
      './src/server/main.js',
    ],
  },

  web: {
    development: [
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

      './src/dashboard/main.js',
    ],

    production: [
      'babel-polyfill',
      './src/dashboard/main.js',
    ],
  },
};

module.exports = ({ production, target }) => entries[target][production ? 'production' : 'development'];
