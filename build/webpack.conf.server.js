const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.join(__dirname, '../src/server/index.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../dist/static'),
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
