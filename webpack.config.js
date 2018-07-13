const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client/src'),
  devtool: '#eval-source-map',
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'client/public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            'babel-loader',
        ],
      },
        {
        test: [/\.wexbim$/, /\.docx$/, /\.csv$/, /\.mp4$/, /\.xlsx$/, /\.doc$/, /\.avi$/, /\.webm$/, /\.mov$/, /\.mp3$/, /\.pdf$/],
        use: [
            'file-loader',
        ],
        },
        {
        test: /\.(png|jpg)$/,
        use: [
            'url-loader?limit=200000',
        ],
        },

        {
        test: /\.jsx\.html$/,
        exclude: /node_modules/,
        use: [
            'babel!react-pure-html-component',
        ],
        },
        {
        test: /\.css$/,
        use: [
            'style-loader','css-loader',
        ],
        },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.jsx.html', '.json'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
