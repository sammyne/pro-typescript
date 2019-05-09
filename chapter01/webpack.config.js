const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: "./test/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      title: "pro-typescript",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"], // .js is required
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //compress: true,
    historyApiFallback: true,
    hot: true,
  },
}
