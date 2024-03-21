const Dotenv = require('dotenv-webpack');
const common = require('./base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputDirectory = '../../../public';
require('dotenv').config({ path: './.env' });
const appRoot = process.env.APP_ROOT || '';
console.log(process.env.APP_ROOT, 'root')
module.exports = {
  ...common,
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [outputDirectory],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: './bundle.css'
    }),
    new Dotenv()
  ]
};
