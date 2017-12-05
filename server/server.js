const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevHotMiddleware = require('webpack-hot-middleware');

const app = express();

const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackDevHotMiddleware(compiler));
//  {
//     	log: console.log,
//     	path: '/__webpack_hmr', 
//     	heartbeat: 10 * 1000
// 	})
// );
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Server has been started!!! ...Listhen port 3000!\n');
});