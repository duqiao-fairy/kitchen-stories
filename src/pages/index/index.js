import entry from 'entry'

import mHeader from 'comModules/_header'
import mFooter from 'comModules/footer'
import router from './router'

const App = {

  components: {
    mHeader: mHeader,
    mFooter
  },

  render () {
    return <div>
      <m-header></m-header>
      <router-view></router-view>
      <m-footer></m-footer>
    </div>
  }
}

const Options = {
  router
}

entry(App, Options)