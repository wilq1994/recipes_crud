const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
    https: false,
  },
};
