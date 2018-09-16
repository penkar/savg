const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:"./index.js",
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'index.js',
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
    },{
      test:/.scss$/,
      exclude:/node_modules/,
      use:['style-loader', 'css-loader', 'sass-loader']
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
