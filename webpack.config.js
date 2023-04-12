const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js',
        about: './js/about/about.js',
        analytics: './js/analytics/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: {loader: 'babel-loader'},
            exclude: /node_modules/
            },
            {
            test: /\.css$/,
            use: [
                (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                'css-loader',
                'postcss-loader'
                ]
            },
            {
            test: /\.(png|jpe?g|gif|ico|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/image/[name][ext]'
              },
            use: {loader: 'image-webpack-loader'}
            },
            {
            test: /\.(ttf|woff|woff2|eot)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]'
              }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './analytics.html',
            filename: 'analytics.html',
            chunks: ['analytics']
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new FaviconsWebpackPlugin({
            logo: './images/favicon/group.png',
            prefix: 'icons/',
            mode: 'webapp',
            devMode: 'webapp',
            cache: true,
            inject: htmlPlugin => {
                return true; 
            }
        })
    ]
};