import Vue from 'vue'
import Vuex from 'vuex'

import board from './modules/columns'
import status from './modules/status'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board,
    status
  },

  state: {},

  getters: {},

  actions: {},

  mutations: {}
})
