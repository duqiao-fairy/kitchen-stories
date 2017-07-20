
/**
 * 不管Promise对象最后状态是 Fulfilled | Rejected, 最后执行的finally函数
 * @param {Function} 回调函数
 */ 
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    let p = this.constructor
    return this.then(
      value => Promise.resolve(callback.call(this, value)),
      reason => Promise.reject(callback.call(this, reason)).then(null, () => { throw reason })
    )
  }
}

/**
 * Date.prototype下的格式方法
 * @param {String} format 格式化方式
 * @example
 *    年-月-日 时:分:秒
 *    yyyy-MM-dd hh:mm:ss:SS => 2016-10-29 10:22:22.176
 *    yyyy年MM月dd日 hh:mm:ss:SS => 2016年10月29日 10:22:22.176
 */
Date.prototype.format = function (format) {
  let date = {
    'y+': this.getFullYear(),
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S+': this.getMilliseconds()
  }
  let k

  for (k in date) {
    let re = new RegExp('(' + k + ')')
    format = format.replace(re, function ($1) {
      return date[k] < 10 ? '0' + date[k] : date[k]
    })
  }

  return format
}