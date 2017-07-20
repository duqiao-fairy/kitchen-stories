/**
 * @file 执行wx jsapi 默认应用
 */

import weixin from 'weixin'
import $bridge from 'bridge'
import user from 'user'

const _shareOpts = {
  title: '',
  desc: '',
  imgUrl: '',
  link: 'https://m.duqiao.cn'
}

const shareMap = {
  /**
   * @params {Object} options 客户端右上角分享按钮的参数
   */
  client (...rest) {
    $bridge.setTitleRightButton(...rest)
  },

  wx (options) {    
    const $wx = weixin()

    $wx.onMenuShareAppMessage(options)
    $wx.onMenuShareTimeline(Object.assign(options, {
      title: options.desc,
      desc: options.title
    }))
    $wx.onMenuShareQQ(options)
    $wx.onMenuShareQZone(options)
  }
}

export default ({ shareOpts, clientShareButtonOpts }) => {
  shareOpts = Object.assign(_shareOpts, shareOpts)

  // 用户登录, 就表示在客户端内, 就走客户端的分享设置
  if (user.isLogin) {
    // 设置分享文案
    $bridge.setShareOpts(shareOpts)
    shareMap.client(clientShareButtonOpts)
  } else {
    shareMap.wx(shareOpts)
  }
}