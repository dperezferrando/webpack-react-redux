const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./client/app.jsx",
  output: {
    path: path.join(__dirname, '/../public'),
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './server/index.html'
    })
  ],
  node: { fs: 'empty' },
  devtool: 'inline-source-map'
};
