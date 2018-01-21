const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    polyfills: "./src/polyfills.js",
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: [
            "transform-object-rest-spread",
            "transform-class-properties",
          ],
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
