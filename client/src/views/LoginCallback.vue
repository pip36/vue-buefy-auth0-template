<template>
  <b-loading :active="true"></b-loading>
</template>

<script>
import Auth from '@/services/authentication'

export default {
  name: 'LoginCallback',
  created () {
    Auth.handleAuthentication()
  }
}
</script>
