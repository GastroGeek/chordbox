const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server.js'),
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'index.html.template'), to: path.resolve(__dirname, 'dist/index.html') },
        { from: path.resolve(__dirname, 'src/libs/live.js'), to: path.resolve(__dirname, 'dist/live.js') },
        { from: path.resolve(__dirname, '../fonts/*'), to: path.resolve(__dirname, 'dist/assets') }
      ]
    })
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      chordbox: path.resolve(__dirname, '../dist/chordbox.umd.js')
    }
  }
}
