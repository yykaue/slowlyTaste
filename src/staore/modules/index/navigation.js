import Cookies from 'js-cookie'
import Axios from './../../../../config/Interface'

const navigation = {
  state: {
    themes: 'dark',
    userName: '管理者',
    breadcrumb: [
      {
        id: 0,
        class: true,
        name: '作业管理',
        to: '/'
      }
    ],
    domain: 'localhost'
  },
  mutations: {

  },
  actions: {
    subject: ({
      state
    }, name) => {
      if (name.indexOf('-') === -1) {
        state.themes = name
      }
    },
    clearCookie: ({
      state
    }, router) => {
      Cookies.remove('rank', {
        domain: state.domain
      })
      router.push({
        path: '/landing'
      })
    },
    getUsers: ({
      state
    }) => {
      
    }
  },
  getters: {
    themes (state) {
      return state.themes
    },
    userName (state) {
      return state.userName
    },
    breadcrumb (state) {
      return state.breadcrumb
    }
  }
}

export default navigation
