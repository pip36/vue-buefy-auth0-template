import config from '@/config.js'
import router from '@/router.js'
import store from '@/store.js'

let auth = config.auth

export default {
  login () {
    auth.authorize()
  },

  handleAuthentication () {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        storeSession(authResult)
        router.replace('/')
      } else if (err) {
        router.replace('/')
        console.log(err)
      }
    })
  },

  logout () {
    store.commit('clearSession')
    router.replace('/')
  },

  isAuthenticated () {
    if (!store.state.currentSession) return false
    let expiresAt = JSON.parse(store.state.currentSession.expiresAt)
    return new Date().getTime() < expiresAt
  }
}

function storeSession (authResult) {
  let expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  )

  let userObject = {
    accessToken: authResult.accessToken,
    idToken: authResult.idToken,
    expiresAt: expiresAt
  }

  store.commit('setSession', userObject)
}
