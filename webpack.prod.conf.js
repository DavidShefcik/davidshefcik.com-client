/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* Config */
const VENDOR_LIBS = ["react", "redux", "react-redux", "react-dom", "redux-thunk"];

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src") + "/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader?modules"],
        test: /\.css$/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          "file-loader"
        ]
      },
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            return `npm.${packageName.replace("@", "")}`;
          },
        },
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.RECAPTCHA_SITE_KEY": JSON.stringify(process.env.RECAPTCHA_SITE_KEY)
    })
  ]
};