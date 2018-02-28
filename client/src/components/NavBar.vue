<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-burger is-primary" :class="{'is-active': isOpen}" @click="toggleBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <login-button class="navbar-item"/>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'Navbar',
  components: {
    'login-button': Login
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleBurger () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
    }
  }
}
</script>
