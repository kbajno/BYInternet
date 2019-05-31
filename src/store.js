import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    columns: [
      {
        name: 'Social',
        links: [
          {
            name: 'Facebook',
            url: 'https://facebook.com'
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com'
          }
        ]
      },
      {
        name: 'Development',
        links: [
          {
            name: 'Dev.to',
            url: 'https://dev.to'
          },
          {
            name: 'Hashnode',
            url: 'https://hashnode.com/'
          },
          {
            name: 'CSSTricks',
            url: 'https://css-tricks.com/'
          },
          {
            name: 'Alligator.io',
            url: 'https://alligator.io'
          }
        ]
      }
    ]
  },
  mutations: {
    addColumn (state, columnName) {
      state.columns.push({ name: columnName, links: [] })
    },
    addLink (state, data) {
      state.columns.find(c => c.name === data.name).links.push(data.link)
    }
  },
  actions: {

  },
  getters: {
    getData: state => {
      return state.columns
    }
  }
})
