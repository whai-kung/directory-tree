const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve('src/index.js')],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, '../src'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: 'index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /index/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/',
    contentBase: './src/',
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    disableHostCheck: true,
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
    stats: 'minimal',
  },
}