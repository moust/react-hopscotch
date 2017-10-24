const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'demo');

const config = {
    entry: path.resolve(APP_DIR, 'index.js'),
    output: {
        path: path.resolve(APP_DIR, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],
    devServer: {
        contentBase: APP_DIR,
        compress: true,
        port: 3000
    }
};

module.exports = config;
