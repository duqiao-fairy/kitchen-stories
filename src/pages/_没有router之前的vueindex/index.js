import entry from 'entry'

import container from './app'
import mHeader from 'comModules/header'
import mFooter from 'comModules/footer'
// console.log(container)
entry({
  template: `<div>
      <mHeader></mHeader>
      <container></container>
      <m-footer></m-footer>
    </div>`,
  components: {
    container,
    mHeader: mHeader,
    mFooter
  },

  // render () {
  //   return <div>
  //     <m-header></m-header>
  //     <container></container>
  //     <m-footer></m-footer>
  //   </div>
  // }
})