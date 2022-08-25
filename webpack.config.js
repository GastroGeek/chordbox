const path = require('path');
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')

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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'fonts/*'), to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],
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
