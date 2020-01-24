const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./client/app.js",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './server/public/index.html'
    })
  ],
  node: { fs: 'empty' },
  devtool: 'inline-source-map'
};
