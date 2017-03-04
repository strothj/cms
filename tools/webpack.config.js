const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackEnvironment = require('./webpack.config.env');
const webpackEntry = require('./webpack.config.entry');
const webpackPlugins = require('./webpack.config.plugins');
const webpackModule = require('./webpack.config.module');
const webpackOutput = require('./webpack.config.output');

const externals = ({ production, target }) => {
  if (target !== 'node') return null;
  return [nodeExternals({
    whitelist: production ? [] : ['webpack/hot/poll?1000'],
  })];
};

module.exports = (env) => {
  // Grabs "production" boolean and "target" ("node" or "web") from webpack
  // command line arguments.
  // ex: webpack --env.production --env.target=web
  const { production, target } = webpackEnvironment(env);

  return {
    // Use project root as base directory.
    // https://webpack.js.org/configuration/entry-context/#context
    context: path.resolve(__dirname, '..'),

    // Create entry point list with optional hot module replacement and babel
    // polyfill.
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: webpackEntry({ production, target }),

    // Avoid bundling "node_modules".
    // https://github.com/liady/webpack-node-externals
    externals: externals({ production, target }),

    // Tell webpack to watch for filesystem changes so it will compile changed
    // files.
    watch: !production && target === 'node',

    // Set compile target ("node" or "web").
    // https://webpack.js.org/configuration/target/#target
    target,

    // https://webpack.js.org/configuration/plugins/#plugins
    plugins: webpackPlugins({ production, target }),

    module: webpackModule({ target }),

    output: webpackOutput({ production, target }),
  };
};
