const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// TODO: Solve this
// const entryPoint = process.argv.APP_VERSION === 'final' ? './src/js_final/main': './src/js/main';

module.exports = {
  entry: './src/js_final/main',
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
          presets: ['es2015', 'react']
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
    new ExtractTextPlugin('styles.css')
  ]
};