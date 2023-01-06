const glob = require('glob');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/**/*.app.ts*').reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].bundle.js',
    sourceMapFilename: '[name]/[name].map',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  }
};
