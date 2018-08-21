
export default {
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
}
