import clickoutside from './clickoutside'

const directives = [
  clickoutside
]

export default {
  init (Vue) {
    directives.forEach(dir => {
      Vue.use(dir)
    })
  }
}