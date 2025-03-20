const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Specify the location of your HTML file
      filename: 'index.html' // Specify the output filename
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html', // Specify the location of your HTML file
      filename: 'login.html' // Specify the output filename
    }),
    new HtmlWebpackPlugin({
      template: './src/mealPlanner.html', // Specify the location of your HTML file
      filename: 'mealPlanner.html' // Specify the output filename
    }),
    new Dotenv()
  ],
};
