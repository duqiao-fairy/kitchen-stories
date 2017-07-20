/**
 * 存储用户信息
 * 
 * @example 
 * import user from 'user'
 * 
 * const userInfo = user.get()
 * 
 * userInfo.sid
 * userInfo.uid
 * 
 * user.isLogin
 * 
 * user.set({ sid: '', uid: '' })
 * 
 * @author duqiao 20170601
 */

const userInfo = {
  sid: '',
  uid: ''
}

/**
 * 内部给观察用的值
 */
const __userInfo = {}

const Observe = function (state) {
  Object.keys(state).forEach((key) => {
    Object.defineProperty(userInfo, key, {
      get () {
        return __userInfo[key]
      },
      set (val) {
        __userInfo[key] = val
        watcher[key] && watcher[key].call(this, val)
      }
    })
  })
}

const user = {
  get () {
    return userInfo
  },

  set (info) {
    if (info && info.constructor === Object) {
      return Object.assign(userInfo, info)
    }
  },

  getMock () {
    return {
      uid: '123',
      sid: 'adsfasdf'
    }
  },

  isLogin: false
}

const methods = {
  isLogin (val) {
    if (userInfo.sid && userInfo.uid) {
      user.isLogin = true
    }
  }
}

const watcher = {
  uid: methods.isLogin,

  sid: methods.isLogin
}


Observe(userInfo)

export default user