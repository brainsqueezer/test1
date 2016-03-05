var path = require('path');

module.exports = {
  entry:  './js/app.jsx',

  output: {
    path: path.resolve(__dirname, './dist'),

    publicPath: 'http://localhost:9090/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        //test: /js\/.+.jsx?$/,
        //exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
    externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React',
      'react-dom': 'ReactDOM'
  },
  //plugins: [
   // new webpack.ProvidePlugin({
   //   "React": "react"
  //  })
  //],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
