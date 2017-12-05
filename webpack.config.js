const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/client/index.html",
  filename: 'index.html',
  inject: 'head'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['build']);
const ExtractLessPlugin = new ExtractTextPlugin({
  filename: "[name]-all.css",
  allChunks:true
});

var config = {
  context:__dirname + "/client",
	entry: './app.js',
	output: {
		path: path.resolve(__dirname + "/public/", "build"),
		filename: 'app-all.js',
		publicPath: '/'
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: ExtractLessPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
  	extensions: ['.js', '.jsx', '.less']
	},
  plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig, ExtractLessPlugin]
};


module.exports = config