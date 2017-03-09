const path = require('path');
const webpackExternals = require('./webpack.config.externals');
const webpackEnvironment = require('./webpack.config.env');
const webpackEntry = require('./webpack.config.entry');
const webpackPlugins = require('./webpack.config.plugins');
const webpackModule = require('./webpack.config.module');
const webpackOutput = require('./webpack.config.output');

module.exports = (env = {}) => {
  // Grabs "production" boolean and "target" ("node" or "web") from webpack
  // command line arguments.
  // ex: webpack --env.production --env.target=web
  env = webpackEnvironment(env); // eslint-disable-line no-param-reassign

  return {
    context: path.resolve(__dirname, '..'),

    entry: webpackEntry(env),

    externals: webpackExternals(env),

    watch: !env.production && env.target === 'node',

    target: env.target,

    // Prevent __dirname from always returning '/' instead of the real
    // directory. Needed so server can locate assets.
    node: (() => {
      if (env.target === 'web') return undefined;
      return { __dirname: false, __filename: false };
    })(),

    plugins: webpackPlugins(env),

    module: webpackModule(env),

    output: webpackOutput(env),

    resolve: { extensions: ['.js', '.jsx', '.json'] },
  };
};
