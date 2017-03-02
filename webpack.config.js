/* eslint-disable padded-blocks, import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const validateWebpackEnvironment = require('./tools/validateWebpackEnvironment');
const generateEntryPoints = require('./tools/generateEntryPoints');
const generatePluginList = require('./tools/generatePluginList');

module.exports = (env) => {
  // Grabs "production" boolean and "target" ("node" or "web") from webpack
  // command line arguments.
  // ex: webpack --env.production --env.target=web
  const { production, target } = validateWebpackEnvironment(env);

  return {
    // Use project root as base directory.
    // https://webpack.js.org/configuration/entry-context/#context
    context: path.resolve(__dirname),

    // Create entry point list with optional hot module replacement and babel
    // polyfill.
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: generateEntryPoints({ production, target }),

    // Avoid bundling "node_modules".
    // https://github.com/liady/webpack-node-externals
    externals: (() => {
      if (target !== 'node') return null;
      return [nodeExternals({
        whitelist: production ? [] : ['webpack/hot/poll?1000'],
      })];
    })(),

    // Tell webpack to watch for filesystem changes so it will compile changed
    // files.
    watch: !production && target === 'node',

    // Set compile target ("node" or "web").
    // https://webpack.js.org/configuration/target/#target
    target,

    // https://webpack.js.org/configuration/plugins/#plugins
    plugins: generatePluginList({ production, target }),


  };
};
