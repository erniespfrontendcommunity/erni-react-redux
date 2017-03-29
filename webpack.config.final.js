const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',

    // activate HMR for React
    './js_final/main'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'build'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src', 'js')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["es2015", { "modules": false }],
              "react"
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'css')],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),

    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new CleanWebpackPlugin(['build'], { verbose: false }),

    // Print more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ]
};