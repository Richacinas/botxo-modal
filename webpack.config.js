const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

const stylesheetsLoaders = [
  { loader: 'style-loader' },
  { loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]-[local]-[hash:base64:3]',
      sourceMap: true
    }
  }
];

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
  },
  devtool: 'inline-source-map',
  plugins: [htmlWebpackPlugin, definePlugin],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      //Añadir 'eslint-loader' al final de este objeto para lintear código
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      { test: /\.min\.scss$/, loader: 'style-loader!css-loader?url=false' },
      { test: /\.scss$/, exclude: /\.min\.scss$/, loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]!autoprefixer-loader?{browsers:["last 2 version", "iOS >= 8"]}!sass-loader?outputStyle=expanded&sourceMap' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:8181'
    }
  }
};
