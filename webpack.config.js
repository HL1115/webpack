const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',//模式：production/development
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [// 插件
        new HtmlWebpackPlugin({ //自动生成HTML并引入js
            title: 'webpack',
            template:'./src/index.html'
        })
    ]

};