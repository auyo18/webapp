const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

let config = {
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

if (isDev) {
  config.mode = 'development'
  config.output = {
    filename: '[id].js',
    path: path.join(__dirname, '../dist/static'),
    publicPath: '/'
  }
} else {
  config.mode = 'production'
  config.output = {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/static'),
    publicPath: '/'
  }
  config.optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        }
      }
    },
    runtimeChunk: 'single'
  }
}


module.exports = config
