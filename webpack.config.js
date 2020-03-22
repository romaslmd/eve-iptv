const path = require("path");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  mode: ENV,
  watch: true,
  entry: "./src/index.tsx",
  devtool: "source-map",
  module: {
    rules: [
      {test: /\.tsx?$/, use: "ts-loader", exclude: /(node_modules|build)/},
      {test: /\.js$/, enforce: "pre", loader: "source-map-loader"},
      {test: /\.(sa|sc|c)ss$/i, use: ["style-loader", "css-loader", "sass-loader"]}
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "application.js",
    path: path.resolve(__dirname, "build"),
  }
};
