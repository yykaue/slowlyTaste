import Cookies from 'js-cookie'

export default {
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
}
