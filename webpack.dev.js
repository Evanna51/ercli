const path = require("path");
const WebpackMerge = require("webpack-merge");
const common = require("./webpack.common.js");
const proxy = require("./config/proxy.js");

const { RUN_ENV } = process.env;
const { devServerProxy } = proxy;

const config = WebpackMerge.merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9900,
    clientLogLevel: "silent",
    compress: true,
    hot: true,
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "dist"),
    proxy: devServerProxy[RUN_ENV || "dev"],
  },
});

module.exports = config