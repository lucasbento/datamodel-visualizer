<<<<<<< HEAD
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: './src/index',
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    module: {
        rules: [
        //     {
        //     enforce: 'pre',
        //     test: /\.ts(x?)$/,
        //     loader: 'tslint',
        //     exclude: /node_modules/,
        // },
            {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript',
        }, {
            test: /\.css/,
            loader: 'style!css',
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus'
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/favicon.ico',
            template: 'src/index.html',
        }),
        new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
    ],
    resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
        extensions: ['.js', '.ts', '.tsx'],
    },
}
=======
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/js/main.js')
  ],
  output: {
    path: path.join(process.cwd(), '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('main.css', { allChunks: true }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
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
    }, {
      test: /\.woff(2)?(\?.*$|$)/,
      loader: "url-loader?name=[name].[ext]&limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg|png|jpg)(\?.*$|$)/,
      loader: "file-loader?name=[name].[ext]"
    }]
  }
};
>>>>>>> f77b111e51a374d46a492abbe5bea86cbfb4aa42
