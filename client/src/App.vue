<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style lang='sass'>
@import "../node_modules/bulma/sass/utilities/initial-variables";

$blue: #4012b5;
$primary: $blue;

@import "~bulma/bulma";
@import "~buefy/src/scss/buefy";
</style>
