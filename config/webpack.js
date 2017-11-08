let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// config/webpack.js
module.exports = {
  entry: [
    './client/js/app.js'
  ],
  output: {
    path: './public',
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Trails Application',
      template: './client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: [ 'react', 'es2015', 'stage-0' ]
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }, {
      test: /\.(png|jpg)$/,
      loader: require.resolve('url-loader')
    }]
  }
}
