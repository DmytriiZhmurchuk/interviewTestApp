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
  inject: 'body',
  extraFiles: {
    css:  __dirname + "/client/libs/bootstrap/css/bootstrap.min.css"
  }
});

const HtmlAdminWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/client/admin.html",
  excludeChunks: ['index'],
  filename: 'admin.html',
  inject: 'body',
  extraFiles: {
    css:  __dirname + "/client/libs/bootstrap/css/bootstrap.min.css"
  }
});

const providePlugin = new Webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default'],
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['public']);

const ExtractLessPlugin = new ExtractTextPlugin({
  filename: "[name]-all.css",
  allChunks:true
});

const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

var hotMiddlewareScript = 'webpack-hot-middleware/client';
var isDevelopment = NODE_ENV !== "production";
console.log("isDevelopment " + isDevelopment + NODE_ENV)
var lessLoader;

if(isDevelopment) {
  lessLoader = {
    test: /\.less$/,
    use: [
      {loader: 'style-loader'},
      {loader: 'css-loader'},
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      },
      {loader: 'less-loader'}
    ]
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
		path: __dirname + "/public",
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
      //disable for now
      // {
      //   test: /\.jsx$/,
      //   enforce: "pre",
      //   exclude: [/node_modules/, /public/],
      //   loader: 'eslint-loader'
      // },
      lessLoader,
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude:[path.resolve(__dirname, 'node_modules/bootstrap/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          }
        ]
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include:[path.resolve(__dirname, 'node_modules/bootstrap/fonts/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:'fonts/bootstrap/',
            }
          }
        ]
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude:[path.resolve(__dirname, 'node_modules/bootstrap/fonts/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:'fonts/'
            }
          }
        ]
      },
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
              HotModuleReplacementPlugin,
              providePlugin
          ]
};


module.exports = config