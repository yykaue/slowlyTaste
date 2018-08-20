import Vue from 'vue'
import Vuex from 'vuex'

import landing from './modules/landing/landing'
import navigation from './modules/index/navigation'
import withClients from './modules/withClients/withClients'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    imgUrl: ''
  },
  mutations: {
    //
  },
  actions: {

  },
  getters: {
    imgUrl (state) {
      return state.imgUrl
    }
  },
  modules: {
    landing,
    navigation,
    withClients
  }
})

export default store
