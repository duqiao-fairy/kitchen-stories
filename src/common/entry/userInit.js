import $common from 'utils/common'
import user from 'user'

export default () => {
  user.set({
    uid: $common.getUrlQuery('uid'),
    sid: $common.getUrlQuery('sid')
  })
}