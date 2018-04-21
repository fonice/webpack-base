const path = require('path')
// const createVueLoaderOptions = require('./vue-loader.config')
// const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  entry: {
    index: path.join(__dirname, '../src/views/index/index.js'),
    about: path.join(__dirname, '../src/views/about/index.js')
  },
  // entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'js/[name].bundle.js?[hash:16]',
    path: path.join(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.(vue|jsx|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['latest']
        // },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'resources/[path][name].[ext]?[hash:8]'
        }
      }
    ]
  }

}

module.exports = config
