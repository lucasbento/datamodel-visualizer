var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/js/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract(
        'raw!' +
        'sass?indentedSyntax' +
        '&includePaths[]=' +
        encodeURIComponent(path.resolve(__dirname, "./bower_components/bourbon/app/assets/stylesheets"))
      )
      // test: /\.css$/,
      // loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, {
      test: /\.woff(2)?(\?.*$|$)/,
      loader: "url-loader?name=[name].[ext]&limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg|png|jpg)(\?.*$|$)/,
      loader: "file-loader?name=[name].[ext]"
    }]
  }
};
