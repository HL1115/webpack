# webpack 学习
> 模块打包机，打包所有的资源、脚本、图片、样式表，自动刷新，代码校验
## 项目初始化
- 新建一个webpack文件夹
- cd webpack 执行 yarn init -y
- 创建一个src文件夹，里面创建一个index.js
## 安装 webpack
- 本地安装，-D 代表是开发依赖，上线不需要，不加默认是项目依赖 
```
yarn add webpack webpack-cli -D
```
- 创建.gitignore文件
- webpack可以进行0配置，直接运行 npx webpack
## 配置 webpack
- 创建一个 webpack.config.js 文件
```
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
- 配置 package.json, 设置npm脚本,执行npm run build
```
"scripts":{
    "build":"webpack"
},
```
- 设定 HtmlWebpackPlugin
```
安装
yarn add html-webpack-plugin -D
配置
plugins: [// 插件
    new HtmlWebpackPlugin({ //自动生成HTML并引入js
        title: 'webpack',
        template:'./src/index.html',
        hash:true,
        minify:{
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeAttributeQuotes:true
        }
    })
]
```
- 设置clean-webpack-plugin插件，清除原来生成的文件
```
yarn add clean-webpack-plugin -D
```
- 设置webpack-dev-server,执行 npx webpack-dev-server
，生成内存中的index.html,并执行
```
yarn add webpack-dev-server -D
可配置webpack.config.js
devServer:{
    port:3000
},
```
- 设置package.json
```
"scripts": {
    "build": "webpack",
    "start":"webpack-dev-server --open"
},
```
### loader
- style-loader css-loader
```
安装：
yarn add style-loader css-loader -D
配置：
module: {
    rules:[
        {
            test:/\.css$/,
            use:[//loader匹配的顺序是从右往左
                'style-loader',
                'css-loader'
            ]
        }
    ]
}
loader 带参数
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
        }
    ]
}
```
- less-loader
```
yarn add less less-loader -D
```
- mini-css-extract-plugin 抽取css
```
安装：
yarn add mini-css-extract-plugin -D
配置代码：
loader中
{
    test:/\.css$/,
    use:[
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
    ]
},
插件中
new MiniCssExtractPlugin({
    filename: 'index.css',
}),
```
- babel-loader
```
安装：
yarn add babel-loader @babel/core @babel/preset-env -D
配置：
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
        presets: ['@babel/preset-env',"@babel/preset-react"],
        "plugins": [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties"
        ]
        }
    }
}
```