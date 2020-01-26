/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

/* Configuration */
module.exports = {
  entry: path.resolve(__dirname, "src") + "/index.js", // src/index.js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    inline: true,
    overlay: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new Dotenv()
  ]
};