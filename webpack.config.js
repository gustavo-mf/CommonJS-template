const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          { 
            loader: "style-loader", 
            options: { injectType: "singletonStyleTag" }
          },
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};