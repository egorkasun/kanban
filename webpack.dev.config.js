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
    },
    contentBase: path.resolve('public'),
  },
});
