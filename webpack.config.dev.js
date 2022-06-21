const path = require("path")
const commonConfig = require("./webpack.config.common.js")
const webpack = require("webpack")
const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const environment = require('./client.env')
require('dotenv').config({ path: './client.env' }); 

const config = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8000,
  },
  devtool: 'eval-cheap-source-map',
  // This is the output of Webpack
  output: {
    // From current folder + dist folder that will contains all bundle
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].dev.js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, "./src/"),
      'style': path.resolve(__dirname, "./src/style/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
}

module.exports = merge(commonConfig,{
  ...config,
})