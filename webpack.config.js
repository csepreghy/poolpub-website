var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015']
          }
      },
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
       test: /\.png$/,
       loader: "url-loader?limit=100000"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
}
