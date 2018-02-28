<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <slot name="title"/>
        </h1>
        <h2 class="subtitle">
          <slot name="subtitle"/>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero'
}
</script>
