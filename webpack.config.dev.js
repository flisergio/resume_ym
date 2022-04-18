const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // Node environment - important for bable to declare that Node is in DEV mode

module.exports = {
  // way of exporting in Common.JS
  mode: "development", // webpack knows to run in DEV mode, disables some PROD features
  target: "web",
  devtool: "cheap-module-source-map", // recommended for development, so we have source map, which lets us see our code when debugging in browser
  entry: "./src/index", // app's entry point
  output: {
    // where we want webpack to output (even if webpack does not output in DEV env)
    path: path.resolve(__dirname, "build"), // *__dirname* is current directory's name
    publicPath: "/", // url of a public directory
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal", // minimize info in terminal
    overlay: true, // overlays errors in browser
    historyApiFallback: true, // all requests sent to index.html to handle by React Router
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }), 
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    // telling webpack which files we want to handle
    rules: [
      {
        // rules for  JS files
        test: /\.(js|jsx)$/, // look for .js or .jsx filex
        exclude: /node_modules/, // no need to search for JS files in node_modules, ignoring
        use: ["babel-loader", "eslint-loader"], // what to do with JS files - to run Babel and ESLint loaders
      },
      {
        // rules for CSS files
        test: /\.(sass|css)$/,
        use: ["style-loader", "css-loader"], // allows to import css and webpack will handle all CSS in a single file
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },
};
