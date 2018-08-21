import { Message } from 'iview'
import Cookies from 'js-cookie'

export default {
  verify: ({
    commit
  }) => {
    commit('verify')
  },
  isName: ({
    state,
    commit
  }) => {
    state.verifyName = true
    commit('verify')
  },
  isPassword: ({
    state,
    commit
  }) => {
    state.verifyPassword = true
    commit('verify')
  },
  landingVerify: ({
    state
  }, router) => {
    if (!state.nameShow && !state.passwordShow) {
      Message.success({
        content: '登录成功',
        duration: 2,
        top: 100
      })

      Cookies.set('rank', 'recluse')

      router.push({
        path: '/background/withClients'
      })
    } else {
      Message.error({
        content: '登录失败',
        duration: 2,
        top: 100
      })
    }
  }
}
