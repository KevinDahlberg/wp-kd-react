var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var eslintFormatter = require('react-dev-utils/eslintFormatter')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/server/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            formatter: eslintFormatter,
          }
      },
      {
        test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
