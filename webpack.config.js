const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const inputDir = 'assets';
const outputDir = 'dist';

module.exports = {
  entry: './src/driver.js',
  module: {
    rules: [
      {
        test: /\.(png)$/,
        use: [{
          loader: 'url-loader',
        }]
      }
    ]
  },
  output: {
    filename: 'driver.js',
    path: path.resolve(__dirname, outputDir)
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    new HtmlWebpackPlugin({
      inject: false,
      inlineSource: '.(js|css)$',
      minify: false,
      template: inputDir + '/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
  ],
};
