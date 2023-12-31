const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "main.js")],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    sourceMapFilename: "[file].map"
  },
  devServer: {
    static: path.resolve(__dirname, "./public"),
    port: 3000,
  },
  devtool: "source-map",
};
