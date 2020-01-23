const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'src/index'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         test: /\.js$/,
         include: path.resolve(__dirname, 'src'),
         use: ['babel-loader']
      },
      {
         test: /\.css$/,
         exclude: /node_modules/, 
         use: ['style-loader','css-loader']
      },
      {
         test: /\.css$/,
         include: /node_modules/,
         use: ['style-loader', 'css-loader'],
       }
      ]
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 9000
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "src/index.html" //source html
      })
   ]
};