const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  target: 'node',
  entry: ['@babel/polyfill', path.join(__dirname, '../src/server/index.js')],
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
})

module.exports = config
