<template>
  <div class="home">
    <Hero>
      <p slot="title"> Home </p>
      <p slot="subtitle"> Welcome to the homepage </p>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  components: {
    Hero
  }
}
</script>
