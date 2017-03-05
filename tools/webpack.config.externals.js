const nodeExternals = require('webpack-node-externals');

// Avoid bundling node_modules on server.
module.exports = ({ production, target }) => {
  if (target !== 'node') return undefined;
  return [nodeExternals({
    whitelist: production ? [] : ['webpack/hot/poll?1000'],
  })];
};
