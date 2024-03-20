const Dotenv = require('dotenv-webpack');
const common = require('./base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputDirectory = '../../dist';
require('dotenv').config({ path: './.env' });

module.exports = {
  ...common,
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name].[contenthash].js',
    publicPath: `${process.env.APP_ROOT}/`
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
      filename: 'bundle.css'
    }),
    new Dotenv()
  ]
};
