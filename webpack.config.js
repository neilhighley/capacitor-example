const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/www",
    filename: "bundle.[id].[chunkhash].js"
  },
  module: {
   
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: __dirname + "/src/icon.png", to: __dirname + "/www" },
    ]),
    new HtmlWebpackPlugin({
        path:__dirname+"/src",
        template: 'index.html',

    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}