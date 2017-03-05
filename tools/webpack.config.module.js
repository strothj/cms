const fs = require('fs');
const path = require('path');

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

const commonModules = () => [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    options: babelConfig,
    include: path.resolve(__dirname, '../src'),
  },
  {
    test: /\.yaml$/,
    include: path.resolve(__dirname, '../src'),
    use: ['json-loader', 'yaml-loader'],
  },
];

const modules = {
  node: {
    development: [],
    production: [],
  },
  web: {
    development: [],
    production: [],
  },
};

module.exports = ({ production, target }) => ({
  rules: [
    ...commonModules({ production, target }),
    ...modules[target][production ? 'production' : 'development'],
  ],
});
