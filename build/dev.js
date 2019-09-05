const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonJs = require('./common.js');
module.exports = webpackMerge(commonJs, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: 'js/[name].js'
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
  devServer: {
    hot: true,
    // host:'',
    port: '7777',
    open: true,
    openPage: 'html/index.html'
  }
});
