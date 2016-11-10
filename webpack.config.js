var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'eslint'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ['babel']
    }, {
      test: /\.(jpg|png)$/,
      loader: 'base64-image'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
    }]
  },
  resolve: {
    modules: ['./src', 'node_modules', 'wip_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './',
    headers: { 'Access-Control-Allow-Origin': '*'}
  }
}
