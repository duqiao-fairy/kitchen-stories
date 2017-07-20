/**
 * pages 业务层配置信息
 * @author duqiao-pricess
 * @date 2017-05-23
 */

const IS_DEV = process && process.env.NODE_ENV === 'development'
const IS_GRAY = process.argv.indexOf('gray') > -1

const PROD_CONF = {
  BUILD: {
    /**
     * 资源文件根路径
     */
    assetsPublicPath: '/'
  },

  APIS: {
    root: '//www.tngou.net/'
  }
}

/**
 * 测试环境
 */
const TEST_CONF = {
  APIS: {
    root: ''
  }
}

/**
 * 预发布环境
 */
const GRAY_CONF = {
  APIS: {
    root: '//'
  }
}

// 执行npm run build层时候, 是node环境, 没有window这个变量, 只有global, 所以这里要区分不然会报错, window is node defined
if (!process.argv.length) {
  switch (window.__argv__[0]) {
    case 'gray':
      PROD_CONF.APIS = GRAY_CONF.APIS
      break
  }
}

const DEV_CONF = {
  /**
   * api请求根路径
   */
  APIS: {
    root: '/'
  }
}

const API_ROOT = IS_DEV ? DEV_CONF.APIS.root : PROD_CONF.APIS.root

const CONFIG = {
  IS_DEV,

  API_ROOT,

  DEV: DEV_CONF,
  
  PROD: PROD_CONF,

  /**
   * 项目标识
   */
  SCHEME: 'kitchen-stories',

  /**
   * 项目名称
   */
  PROJECT_NAME: '',

  /**
   * 是否mock
   */
  IS_MOCK: false,
  
  /**
   * 别名
   */
  ALIAS: {

  },

  /**
   * 跨域代理
   */
  PROXY_TABLE: { 
    '/api/*': 'www.tngou.net'
  },

  /**
   * 端口
   */
  PORT: 8099
  
}

module.exports = CONFIG
