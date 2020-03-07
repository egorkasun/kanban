const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  plugins: [
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    overlay: true,
    watchContentBase: true,
    proxy: {
      // ask your backend what urls you should use
      // more details: https://github.com/webpack/docs/wiki/webpack-dev-server#proxy
      '/mail': {
        target: 'http://localhost:3000',
      },
    },
    contentBase: path.resolve('public'),
  },
});
