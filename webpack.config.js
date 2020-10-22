var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: './build',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './app/index.html',
      }),
    ],
    module: {
        rules: [
           {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
           }
        ]
    }
}