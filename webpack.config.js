const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/chordbox.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  output: {
    library: 'chordbox',
    libraryTarget: 'umd',
    libraryExport: "default",
    filename: 'chordbox.umd.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
