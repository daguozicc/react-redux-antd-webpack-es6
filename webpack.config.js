const path =require('path');
var webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",  //入口文件
  output: {
    path: path.join(__dirname,"/dist/"),    // 所有输出文件的目标路径，绝对路径！
    filename: "bundle.js"
  },
  devServer: {
        inline: true,//实时刷新
        port: 3000,//修改默认端口

    },
  module: {
    rules: [
      {
        test:  /\.js$/,                //babel-loader将其他文件解析为js文件
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015","react"]  //babel-loader需要解析的文件
        }
      },
        {
          test:/\.css$/,
          loader:'style-loader!css-loader!postcss-loader'
        }
    ]
  }
};

