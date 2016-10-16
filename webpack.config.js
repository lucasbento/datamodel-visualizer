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
