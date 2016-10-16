const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssnano = require('cssnano')
const path = require('path')

module.exports = {
    entry: {
        app: './src/index',
    },
    output: {
        path: './dist',
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         unused: true,
        //         dead_code: true,
        //         warnings: false,
        //     }
        // }),
        new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    ],
    resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
        extensions: ['.js', '.ts', '.tsx'],
    }
}
