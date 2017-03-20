const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src', 'js')],
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015'
          ]
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
    new HtmlWebpackPlugin({ title: 'Todo List' }),
    new ExtractTextPlugin('styles.css')
  ]
};