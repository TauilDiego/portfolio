const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

// const isDev = process.env.NODE_ENV === "development";
const isAnalyze = !!process.env.ANALYSE
const analyzerMode = isAnalyze ? "server" : "disabled"



const config = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    // From current folder + dist folder that will contains all bundle
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
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
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          // Tell to ts-loader: if you check .vue file extension, handle it like a ts file
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'portfolio project',
      template: './public/index.html',
      inject: 'body',
      minify: {
          removeComments: true,
          collapseWhitespace: false
      }
  }),
    new BundleAnalyzerPlugin({
      openAnalyzer: isAnalyze,
      analyzerMode,
    }),
  ],
}

module.exports = config