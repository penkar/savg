const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:"./index.js",
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'main.js',
    library:'Savg'
  },
  target:'web',
  module:{
    rules:[{
      test:/.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  plugins:[
    new HtmlWebpackPlugin({
      hash:true,
      filename:'./index.html',
      title:"savg",
      template:"./assets/index.html"
    })
  ]
}
