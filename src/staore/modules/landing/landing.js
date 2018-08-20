import { Message } from 'iview'
import Cookies from 'js-cookie'
const landing = {
  state: {
    wechat: {
      api: '//api.pipacoding.com/logic/v1/wechat/pc/login',
      url: 'https://console.pipacoding.com/dashboard'
    },
    landing: {
      name: '',
      password: ''
    },
    marked: '',
    nameShow: false,
    passwordShow: false,
    verifyName: false,
    verifyPassword: false

  },
  mutations: {
    verify (state) {
      if (state.verifyName === true) {
        if (state.landing.name === '') {
          state.nameShow = true
        } else if (state.landing.name !== 'manziwei') {
          state.nameShow = true
        } else {
          state.nameShow = false
        }
      }
      if (state.verifyPassword === true) {
        if (state.landing.password === '') {
          state.passwordShow = true
        } else if (state.landing.password !== '2018.8') {
          state.passwordShow = true
        } else {
          state.passwordShow = false
        }
      }
    }
  },
  actions: {
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

        Cookies.set('rank', 'recluse');

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
  },
  getters: {
    wechat (state) {
      return state.wechat
    },
    landing (state) {
      return state.landing
    },
    marked (state) {
      return state.marked
    },
    nameShow (state) {
      return state.nameShow
    },
    passwordShow (state) {
      return state.passwordShow
    }
  }
}

export default landing
