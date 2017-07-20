import entryMini from 'entry-mini'

import header from 'comModules/header'
// import footer from 'comModules/footer'

// import data from './data'

import './index.less'

/**
 * 跟节点element
 */
let el
let container

const templates = {
  // header: `<div class=header"">header</div>`,
  // content: (data) => {
  //   return `<div class="content">${data.text}</div>`
  // },
  // footer: `<div>footer</div>`
}

function render (el) {
  // el.innerHTML = templates.header + templates.content({ text: 'content' }) + templates.footer
  // el.innerHTML = header 
}


entryMini({
  template: header.template + require('./index.html'),

  init (info) {
    el = this.el
    // container = document.getElementById('container')
    // render(container)
  }
})