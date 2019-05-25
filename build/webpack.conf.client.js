const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  entry: ['@babel/polyfill', path.join(__dirname, '../src/client/index.js')],
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../index.html',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})

module.exports = config
