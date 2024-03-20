const path = require('path');
const pathClient = path.join(__dirname, './../../src');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputDirectory = '../../dist';

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@app': pathClient
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.(tsx|ts$)/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/Lato/',
              esModule: false,
            }
          }
        ]
      }
    ]
  }
}
