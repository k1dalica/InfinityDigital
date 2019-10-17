<template>
  <section id="about">
    <Heading title="About" :percent="40" />
  </section>
</template>

<script>
import Heading from '../common/Heading'

export default {
  name: 'About',

  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
</style>
