import Columns from '@/api/columns'

export default {
  state: {
    columns: []
  },

  getters: {},

  actions: {
    fetchColumns ({ commit }) {
      // make the call
      // run setColumns mutation
      Columns.getColumn(columns => {
        commit('setBoard', columns)
      })
    },

    addColumn (context, name) {
      const columnItem = context.state.columns.find(c => c.name === name)
      // find columnItem
      if (!columnItem) {
        // create column
        context.commit('pushColumn', name)
      } else {
        // send error
        context.commit('statusMessage', 'This column is already created!')
      }
    },

    addCard (context, data) {
      const getColumn = context.state.columns.find(c => c.name === data.colName)
      if (getColumn) {
        context.commit('pushLink', data)
      } else {
        context.commit('statusMessage', 'Error, please refresh this page or contact the support!')
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
    },

    pushLink (state, data) {
      state.columns.find(c => c.name === data.colName).links.push({
        name: data.card.name,
        url: data.card.url
      })
      console.log(data)
    }
  }
}
