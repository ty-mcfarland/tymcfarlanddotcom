const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};