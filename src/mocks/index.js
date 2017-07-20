import Mock from 'mockjs'

import demo from './demo'

const mockObj = Object.assign({}, 
  demo
)
// console.log(mockObj)
export default {
  intercept (key) {
    let mockItem = mockObj[key]

    mockItem && Mock.mock(mockItem.url, mockItem.type, function () {
      let template = mockItem.template

      return typeof template === 'function' ? template() : template
    })
  }
}