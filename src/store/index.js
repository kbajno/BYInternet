import Vue from 'vue'
import Vuex from 'vuex'

import Columns from '@/api/columns'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    columns: []
  },

  mutations: {
    setColumns (state, columns) {
      // update columns
      state.columns = columns
    }
  },

  actions: {
    fetchColumns ({ commit }) {
      // make the call
      // run setColumns mutation
      Columns.getColumns(columns => {
        commit('setColumns', columns)
      })
    }
  },

  getters: {
    columnsCount () {
      // ...
    }
  }
})
