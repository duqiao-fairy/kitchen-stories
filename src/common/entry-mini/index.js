import 'common/less/base'
import loading from 'components/loading'
import flexible from 'utils/flexible'
import S from 'service'

loading.show('entry')

S.$service.setReqInstance('AJAX', $.ajax)

const noop = () => {}

document.addEventListener('DOMContentLoaded', (e) => {
  loading.hide('entry')
})

export default (options) => {
  var el = document.getElementById('app')
  el.innerHTML = options.template || ''

  options.el = el
  options.init()
}
