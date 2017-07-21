import loading from 'components/loading'

const configs = function ($http) {
  $http.options.corssOrigin = true
}

const interceptors = function ($http) {
  $http.interceptors.push(function(request, next) {
      // 请求发送前的处理逻辑
      loading.show('http')

      next(function(response) {
          // 请求发送后的处理逻辑
          // 根据请求的状态，response参数会返回给successCallback或errorCallback
          loading.hide('http')
          return response
      })
  })
}

export default {
  init (Vue) {
    configs(Vue.http)
    interceptors(Vue.http)
  }
}