import entryMini from 'entry-mini'
import header from 'comModules/header'
import footer from 'comModules/footer'
import './index.less'

// import data from './data'

// import './index.less'

/**
 * 跟节点element
 */
let el



// entryMini({
//   template: require('./index.html'),

//   init (info) {
//     el = this.el
//   }
// })

entryMini({
  template: header.template + require('./index.html') + footer.template,

  init (info) {
    el = this.el
    // container = document.getElementById('container')
    // render(container)
  }
})