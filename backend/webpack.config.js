const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'Code.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new GasPlugin()
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};