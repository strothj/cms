const webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');
const { mkdir, rm } = require('shelljs');
const buildPaths = require('./buildPaths');

let buildBackend = false;
let buildFrontend = false;
process.argv.forEach((val) => {
  if (val.toLowerCase() === '--frontend') buildFrontend = true;
  if (val.toLocaleLowerCase() === '--backend') buildBackend = true;
  if (val.toLocaleLowerCase() === '--all') { buildBackend = true; buildFrontend = true; }
});
if (!buildBackend && !buildFrontend) {
  console.log(`build
    --frontend    build frontend
    --backend     build backend
    --all         build both frontend and backend
`);
  process.exit(1);
}

if (buildBackend) {
  rm(buildPaths.serverBundle);
  mkdir(buildPaths.output);
}

if (buildFrontend) {
  rm(buildPaths.indexOutputFilename);
  rm('-rf', buildPaths.assets);
  mkdir(buildPaths.assets);

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('[webpack:build]', stats.toString({
      chunks: false,
      colors: true,
    }));
  });
}
