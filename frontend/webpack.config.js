const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        main:path.resolve(__dirname,'src/index.js')  
      },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      assetModuleFilename: '[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Dstreet',
          filename: 'index.html',
          template: path.resolve(__dirname, './src/template.html'),
        }),
      ],
      module: {
        rules: [
          //css
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          //images
          {
            test: /\.(gif|svg|png|avif|jpe?g|jpg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images/',
                  publicPath:'assets/images/'
                }
              }
            ]
          },
            //html-loader
           
          //js for babel
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true,
  },
  };