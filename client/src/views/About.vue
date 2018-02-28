<template>
  <div class="about">
    <Hero>
      <p slot="title"> About </p>
      <p slot="subtitle"> The about page </p>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'about',
  components: {
    Hero
  }
}
</script>
