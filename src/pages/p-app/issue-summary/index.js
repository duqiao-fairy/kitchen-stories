import entryMini from 'entry-mini'

import './index.less'
// import './style.postcss'

var DATA = [
  {
    title: '怎么绑定提现微信号呢？',
    text: `宝宝，你可打开duqiaoAPP-个人主页-收益页面，将提示您进
      行“绑定微信”操作，根据相应提示步骤完成微信登录授权及
      手机号码验证，即可操作完成啦（注：安卓用户需点击“安
      卓用户领取红包的链接”进行绑定哦~）`
  },
  {
    title: '怎么提现呢？',
    text: `宝宝，你完成提现微信账号绑定后，可打开duqiaoAPP-个人
      主页-收益页面点击领劳务费或领取红包，根据提示打开微
      信搜索公众号“duqiao”或“duqiao_live”，绑定duqiao号后即可点击
      “领取红包”进行提现啦~`
  },
  {
    title: '为何已经绑定但微信公众号仍然显示未绑定？',
    text: `宝宝，你完成提现微信账号绑定后，可打开duqiaoAPP-个人
      主页-收益页面点击领劳务费或领取红包，根据提示打开微
      信搜索公众号“duqiao”或“duqiao_live”，绑定duqiao号后即可点击
      “领取红包”进行提现啦~`
  }
]

var blockRowWraper
var templates = {
  blockRow: function (obj, index) {
    return `<div class="block-row com-border-bottom">
      <h3 class="block-row-title com-padding">${index}.${obj.title}</h3>
      <p class="block-row-text com-padding">${obj.text}</p>
    </div>`
  }
}

var render = function () {
  var str = ''
  DATA.forEach(function (obj, i) {
    str += templates.blockRow(obj, i + 1)
  })
  blockRowWraper.innerHTML = str
}

entryMini({
  template: require('./index.html'),

  init () {
    blockRowWraper = document.getElementById('blockRowWraper')

    render()
  }
})
