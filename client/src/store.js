import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    currentSession: null
  },
  mutations: {
    setSession (state, user) {
      state.currentSession = user
    },
    clearSession (state) {
      state.currentSession = null
    }
  },
  actions: {

  }
})
