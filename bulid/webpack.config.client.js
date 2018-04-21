const webpack = require('webpack')
// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const isDev = process.argv.indexOf('development') > 0
// console.log(process.env.production)
// console.log(process.env.NODE_ENV)
// console.log('process.argv============================================================')
// console.log(process.argv)

const defaultPlugins = [
  // new HtmlWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/views/index/index.ejs',
    inject: 'body',
    chunks: ['index']
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    inject: 'body',
    chunks: ['about']
  }),
  // new HtmlWebpackPlugin({
  //   template: path.join(__dirname, 'template.html')
  // }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  })
]

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    devServer: {
      host: '192.168.0.88',
      overlay: {
        errors: true
      },
      // open: true
      hot: true,
      // historyApiFallback: {
      //   index: '/index.html'
      // }
      port: 1388 //  默认8080
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }
      ]
    },
    // plugins: defaultPlugins
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          // loader: 'style-loader!css-loader!postcss-loader'
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?!postcss-loader'
          })
        },
        {
          test: /\.scss$/,
          // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!postcss-loader!sass-loader'
          })
        }
      ]
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   },
    //   runtimeChunk: true
    // },
    // optimization: {
    //   runtimeChunk: {
    //     name: 'manifest'
    //   },
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'vendor',
    //         chunks: 'all'
    //       }
    //     }
    //   }
    // },
    plugins: defaultPlugins.concat([
      new ExtractTextPlugin('styles/[name].css?[chunkhash:16]')
    ])

  })
}

module.exports = config
