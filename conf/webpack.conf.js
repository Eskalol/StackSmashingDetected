const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          'url-loader?limit=10000&mimetype=application/font-woff'
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `./${conf.path.src('index')}`
  ]
};
