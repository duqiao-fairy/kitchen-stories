import entry from 'entry'
// import data from './data'

import container from './app'
import mHeader from 'comModules/_header'


entry({
  components: {
    container,
    mHeader
  },

  render () {
    return <div>
      <m-header></m-header>
      <container></container>
    </div>
  }
})
