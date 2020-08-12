const WebpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = WebpackMerge.merge(common, {
  mode: "production",
  plugins: [new UglifyJSPlugin()],
});
