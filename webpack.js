const path = require("path");

module.exports = {
  entry: {
    "bundle.js":"./src/index.js",
  },
  output: { 
    filename:"./[name]"
  },
  target:"web",
  resolve: {
    extensions: ["*",".js",".jsx"]
  },
  module: {
    rules: [{
      test:/.html/,
      exclude:/node_modules/,
      use:["html-loader"]
    },{
      test:/.js$/,
      exclude:/node_modules/,
      use:"babel-loader",
    },{
      test:/.scss$/,
      exclude:/node_modules/,
      use:["style-loader","css-loader","sass-loader"]
    }]
  }
}
