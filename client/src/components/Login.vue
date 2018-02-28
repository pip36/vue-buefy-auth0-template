<template>
  <a v-if="!isLoggedIn" @click="login">
    Login
  </a>
  <a v-else @click="logout">
    Logout
  </a>
</template>

<script>
import Auth from '@/services/authentication'

export default {
  name: 'Login',
  methods: {
    login () {
      Auth.login()
    },

    logout () {
      Auth.logout()
    }
  },
  computed: {
    isLoggedIn () {
      return Auth.isAuthenticated()
    }
  }
}
</script>
