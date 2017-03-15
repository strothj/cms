const fs = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack understands the native import syntax and uses it for tree shaking.
// Disable Babel transformation of "import" statements.
// https://webpack.js.org/guides/hmr-react/
// https://github.com/kriasoft/react-static-boilerplate/blob/master/tools/webpack.config.js#L21
const babelrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc')));
const babelConfig = Object.assign({}, babelrc, {
  babelrc: false,
  cacheDirectory: true, // TODO: Set this to true only when HMR is enabled.
  presets: babelrc.presets.map((x) => {
    if (Array.isArray(x) && x[0] === 'env') {
      x[1].modules = false; // eslint-disable-line no-param-reassign
    }
    return x;
  }),
});

module.exports = () => ({
  rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.resolve(__dirname, '../src'),
    },
    {
      // Resolves an issue where Webpack does not correctly load the Swagger
      // generated api client.
      test: /\.js$/,
      include: path.resolve(__dirname, '../node_modules/node-cms'),
      use: 'imports-loader?define=>false',
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: babelConfig,
      include: path.resolve(__dirname, '../src'),
    },
    {
      // Used for loading Swagger api schema.
      test: /\.yaml$/,
      include: path.resolve(__dirname, '../src'),
      use: ['json-loader', 'yaml-loader'],
    },
    {
      // Extract CSS to its own file.
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      }),
    },
  ],
});
