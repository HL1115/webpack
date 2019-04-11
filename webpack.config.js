const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',//模式：production/development
    devServer: {
        port: 3000
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [// 插件,是个数组，可以有很多插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //自动生成HTML并引入js
            title: 'webpack',
            template: './src/index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                removeAttributeQuotes: true
            }
        })
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[//loader匹配的顺序是从右往左
                    {
                        loader:'style-loader',
                        options: {
                            insertAt: 'top'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader',
                        options: {
                            insertAt: 'top'
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }

};