var config = require('../config')
const path = require('path')
const webpack = require('webpack')
const ENV = process.env.NODE_ENV || 'production'
const libName = 'lib' + (ENV === 'development' ? '_dev' : '')
const libs = [
  'vue',
  'vue-resource',
  'vuex',
  'vue-router'
]

module.exports = {
  entry: {
    [libName]: libs
  },
  output: {
    path: path.resolve(config.dev.staticRoot, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    })
  ]
}
