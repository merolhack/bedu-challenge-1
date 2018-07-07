const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    target: 'web',
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].[hash].js",
        publicPath: "./"
    },
    devServer: {
        contentBase: 'docs',
        publicPath: '/',
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }
            },
            {
                test: /\.html$/,
                use: [
/*                     {
                        loader: 'raw-loader',
                    },
                    {
                        loader: "underscore-template-loader",
                        query: {
                            engine: 'lodash',
                        }
                    }, */
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin('docs', {}),
        new HtmlWebpackPlugin({ // Custom / Personalizado
            title: 'My App: Foo',
            filename: './index.html',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ]
};
