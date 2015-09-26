var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban app'
    })
  ]
};
