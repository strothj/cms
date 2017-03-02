const serverProd = [
  './src/server/main.js',
];

const serverDev = [
  // Activate HMR.
  'webpack/hot/poll?1000',

  ...serverProd,
];

const dashboardProd = {
  dashboard: [
    'babel-polyfill',

    './src/dashboard/main.js',
  ],
};

const dashboardDev = {
  dashboard: [
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
};

module.exports = ({ production, target }) => {
  if (target === 'node') {
    if (production) return serverProd;
    return serverDev;
  }
  if (production) return dashboardProd;
  return dashboardDev;
};
