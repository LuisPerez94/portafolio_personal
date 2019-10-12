module.exports = {
  entry: "./src/index.js",
  output: { path: __dirname + "/dist", publicPath: "/", filename: "bundle.js" },
  devServer: { contentBase: __dirname + "/dist", historyApiFallback: true },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use:["style-loader", "css-loader"] }
    ]
  }
};
