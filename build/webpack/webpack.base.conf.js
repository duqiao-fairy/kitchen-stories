var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var entry = require('../entry')
var webpack = require('webpack')
var HappyPack = require('happypack')
var getHappyPackConfig = require('./happypack.conf')

var postcssConf = require('../../.postcssrc.js')
var srcConfig = config.srcConfig
var SCHEME = srcConfig.SCHEME

var resolve = utils.rootPathResolve

var defaultExternals = {
  // 'vue': 'Vue',
  // 'vue-resource': 'VueResource',
  // 'vue-router': 'VueRouter',
  // 'vuex': 'Vuex',
  'zepto': 'zepto'
}

var defaultIncludePath = [resolve('src'), resolve('test')]

var defaultExcludePath = [/node_modules/, resolve('src/assets'), resolve('src/common/element')]

var defaultVendors = ['vue', 'vue-router', 'vuex', 'vue-resource']

var externalsMap = {

}

var excludeMap = {

}

var vendorMap = {

}

// 映天下 不能排除 element根目录, 因为用的是iview组件
var jsExcludePath = excludeMap[SCHEME] || defaultExcludePath

var externals = /*externalsMap[SCHEME] || */defaultExternals

var vendors = vendorMap[SCHEME] || []

var entries = entry.getEntries()

module.exports = {
  entry: vendors && vendors.length ? Object.assign(entries, {
    vendor: vendors
  }): entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.css', '.vue', '.html', '.less', '.postcss', '.jsx', '.json'],
    alias: config.alias
  },  
  
  /**
   * key: import 的路径别名, 如: import Vue from 'vue'
   * value: window.Vue 的全局变量
   */
  externals: externals,

  module: {
    rules: [
      {
        test: /\.vue$/,
        include: defaultIncludePath,
        exclude: [/node_modules/, resolve('src/mocks'), resolve('src/assets')],
        use: [{
          loader: 'happypack/loader?id=vue',
        }]      
      },
      {
        test: /\.js$/,
        include: defaultIncludePath,
        exclude: jsExcludePath,
        loader: 'happypack/loader?id=js',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      }
    ]
  },

  plugins: [
    new HappyPack(getHappyPackConfig({
      id: 'vue',
      loaders: [{
        loader: 'vue-loader',
        query: vueLoaderConfig
      }]
    })),

    new HappyPack(getHappyPackConfig({
      id: 'js',
      loaders: [{
        loader: 'babel-loader',
        query: {
          cacheDirectory: './webpack_cache/'
        },
      }]
    })),

    // less 配置目前已由函数封装, 再次配置比较繁琐, 暂时不考虑
    new HappyPack(getHappyPackConfig({
      id: 'less',
      loaders: ['vue-style-loader', 'css-loader', 'less-loader']
    }))
    // new webpack.LoaderOptionsPlugin({
    //   options: { 
    //     vue: {
    //       // use custom postcss plugins, 已在 .postcssrc.js 里配置
    //       // postcss: [require('postcss-px2rem')(postcssConf.plugins['postcss-px2rem'])]
    //     },
    //   }
    // })
  ]  
}
