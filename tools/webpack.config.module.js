const fs = require('fs');
const path = require('path');

// Webpack understands the native import syntax and uses it for tree shaking.
// Disable Babel transformation of "import" statements.
// https://webpack.js.org/guides/hmr-react/
// https://github.com/kriasoft/react-static-boilerplate/blob/master/tools/webpack.config.js#L21
const babelrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc')));
const babelConfig = Object.assign({}, babelrc.babel, {
  babelrc: false,
  cacheDirectory: true,
  presets: babelrc.presets.map((x) => {
    if (Array.isArray(x) && x[0] === 'env') {
      x.modules = false; // eslint-disable-line no-param-reassign
    }
    return x;
  }),
});

module.exports = ({ target }) => {
  if (target === 'node') (() => {})();

  return {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: babelConfig,
        include: path.resolve(__dirname, '../src'),
      },
    ],
  };
};
