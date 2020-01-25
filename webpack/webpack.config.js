const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _ = require("lodash");

const commonConfig = {
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
};

const devConfig = {
  devtool: 'inline-source-map'
};

const prodConfig = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  }
};

const configMap = {
  development: devConfig,
  test: devConfig,
  production: prodConfig
}


module.exports = () => {
  return _.assign({}, configMap[process.env.NODE_ENV], commonConfig);
}
