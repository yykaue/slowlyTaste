import Vue from 'vue'
import Vuex from 'vuex'

import state from './modules/state.js'
import mutations from './modules/mutations.js'
import actions from './modules/actions.js'
import getters from './modules/getters.js'

import landing from './modules/landing'
import navigation from './modules/index'
import withClients from './modules/withClients'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    landing,
    navigation,
    withClients
  }
})

export default store
