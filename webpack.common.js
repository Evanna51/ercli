const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const proxy = require("./config/proxy.js");

const { RUN_ENV } = process.env;
const { apiProxy } = proxy;

const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/;
const svgOptions = {
  limit: 10000,
  minetype: "image/svg+xml",
};

const imageOptions = {
  limit: 10000,
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.DefinePlugin({
      GLOBAL_API_PROXY: JSON.stringify(apiProxy[RUN_ENV || "dev"].api),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve("src"),
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
          {
            loader: require.resolve("ts-loader"),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: svgRegex,
        loader: "url-loader",
        options: svgOptions,
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: "url-loader",
        options: imageOptions,
      },
    ],
  },
};
