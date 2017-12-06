const path = require('path');
const NODE_ENV = process.env.NODE_ENV || "development";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require('webpack');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/client/index.html",
  excludeChunks: ['admin'],
  filename: 'index.html',
  inject: 'body'
});

const HtmlAdminWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/client/admin.html",
  excludeChunks: ['index'],
  filename: 'admin.html',
  inject: 'body'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['build']);

const ExtractLessPlugin = new ExtractTextPlugin({
  filename: "[name]-all.css",
  allChunks:true
});

const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

var hotMiddlewareScript = 'webpack-hot-middleware/client';
var isDevelopment = NODE_ENV !== "production";
var lessLoader;

if(isDevelopment) {
  lessLoader = {
    test: /\.less$/,
    loader:'style-loader!css-loader!less-loader'
  };
} else {
  lessLoader = {
    test: /\.less$/,
    use: ExtractLessPlugin.extract({
    fallback: 'style-loader',
      use: ['css-loader', 'less-loader']
    })
  };
}

var config = {
  context:__dirname + "/client",
	entry:{
    index: ['./index.js', hotMiddlewareScript],
    admin: ['./admin.js', hotMiddlewareScript]
  },
	output: {
		path: path.resolve(__dirname + "/public/", "build"),
		filename: '[name]-all.js',
		publicPath: '/'
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        loader: 'babel-loader',
      },
      lessLoader,
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
  plugins: [
              HtmlWebpackPluginConfig,
              HtmlAdminWebpackPluginConfig,
              CleanWebpackPluginConfig, 
              ExtractLessPlugin, 
              HotModuleReplacementPlugin
          ]
};


module.exports = config