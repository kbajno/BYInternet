export default {
  state: {
    message: null
  },

  mutations: {
    statusMessage (state, message) {
      state.message = message
      setTimeout(() => { state.message = null }, 5000)
    }
  }
}
