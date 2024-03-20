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
  mode: 'development',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: 'http://localhost:4007/'
  },
  devServer: {
    port: 4007,
    historyApiFallback: {
      disableDotRule: true
    },
    open: true,
    allowedHosts: ['all'],
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [outputDirectory],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: `./bundle.css`,
    }),
    new Dotenv()
  ]
};
