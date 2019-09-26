const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  watch: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }]
    }],
  },
  plugins: [
    new HWP(
      {
        template: path.join(__dirname, '/index.html'),
        hash: true
      },
    ),
  ],
};
