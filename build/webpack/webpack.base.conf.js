var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var entry = require('../entry')
var webpack = require('webpack')
var postcssConf = require('../../.postcssrc.js')
var srcConfig = config.srcConfig
var SCHEME = srcConfig.SCHEME

var resolve = utils.rootPathResolve

var defaultExternals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'vue-resource': 'VueResource',
  'zepto': 'zepto'
}

var defaultIncludePath = [resolve('src'), resolve('test')]

var defaultExcludePath = [/node_modules/, resolve('src/assets'), resolve('src/common/element')]

var defaultVendors = ['vue', 'vue-router', 'vuex', 'vue-resource']

var externalsMap = {
  'inmyworld.cn': {}
}

var excludeMap = {
  'inmyworld.cn': [/node_modules/, resolve('src/assets')]
}

var vendorMap = {
  'inmyworld.cn': defaultVendors
}

// 映天下 不能排除 element根目录, 因为用的是iview组件
var jsExcludePath = excludeMap[SCHEME] || defaultExcludePath

var externals = /*externalsMap[SCHEME] || */defaultExternals

var vendors = /*vendorMap[SCHEME] || */[]

var entries = entry.getEntries()

module.exports = {
  entry: vendors && vendors.length ? Object.assign(entries, {
    vendor: vendors
  }): entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
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
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: defaultIncludePath,
      //   exclude: defaultExcludePath.concat([resolve('src/mocks')]),
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: defaultIncludePath,
        exclude: [/node_modules/, resolve('src/mocks'), resolve('src/assets')],
        options: vueLoaderConfig        
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: defaultIncludePath,
        exclude: jsExcludePath
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
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
    new webpack.LoaderOptionsPlugin({
      options: { 
        vue: {
          // use custom postcss plugins, 已在 .postcssrc.js 里配置
          // postcss: [require('postcss-px2rem')(postcssConf.plugins['postcss-px2rem'])]
        },
      }
    })
  ]  
}
