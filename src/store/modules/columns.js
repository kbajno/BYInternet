import Columns from '@/api/columns'

export default {
  state: {
    columns: []
  },

  getters: {

  },

  actions: {
    fetchColumns ({ commit }) {
      // make the call
      // run setColumns mutation
      Columns.getColumn(columns => {
        commit('setBoard', columns)
      })
    },

    addColumn (context, column) {
      const columnItem = context.state.columns.find(c => c.name === column)
      // find columnItem
      if (!columnItem) {
        // create column
        context.commit('pushColumn', column)
      } else {
        // send error
        context.commit('statusMessage', 'This column is already created!')
      }
    }
  },

  mutations: {
    setBoard (state, board) {
      // update columns
      state.columns = board
    },

    pushColumn (state, column) {
      state.columns.push({
        name: column,
        links: []
      })
    }
  }
}
