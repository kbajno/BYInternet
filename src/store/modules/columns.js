import Columns from '@/api/columns'

export default {
  state: {
    columns: []
  },

  getters: {},

  actions: {
    // ---------- Column actions ----------
    fetchColumns ({ commit }) {
      // get all the columns form the database
      Columns.getColumn(columns => {
        commit('setBoard', columns)
      })
    },

    addColumn (context, data) {
      // add a column
      const columnItem = context.state.columns.find(c => c.name === data.columnName) // find columnItem
      if (!columnItem) {
        // create column
        context.commit('pushColumn', data)
      } else {
        // send error
        context.commit('statusMessage', 'This column is already created!')
      }
    },

    // ---------- Card actions ----------
    addCard (context, data) {
      // create a card
      const getColumn = context.state.columns.find(c => c.id === data.colId) // find the column
      if (getColumn) {
        // create card
        context.commit('pushLink', data)
      } else {
        // send error
        context.commit('statusMessage', 'Error, please refresh this page or contact the support!')
      }
    },

    editCard (context, data) {
      // edit a card
      // find the column
      const getColumn = context.state.columns.find(c => c.id === data.colId)
      // find the card
      const getCard = getColumn.links.find(c => c.id === data.card.id)
      if (getCard) {
        context.commit('editLink', data)
      } else {
        context.commit('statusMessage', 'Error, this card does not seem to exist.')
      }
    }
  },

  mutations: {
    setBoard (state, board) {
      // update columns
      state.columns = board
    },

    pushColumn (state, data) {
      // create a column
      state.columns.push({
        id: data.id,
        name: data.columnName,
        links: []
      })
    },

    pushLink (state, data) {
      // create a card
      state.columns.find(c => c.id === data.colId).links.push({
        id: data.card.id,
        name: data.card.name,
        url: data.card.url
      })
    },

    editLink (state, data) {
      const getCard = state.columns.find(c => c.id === data.colId).links.find(c => c.id === data.card.id)
      getCard.name = data.card.name
      getCard.url = data.card.url
    }
  }
}
