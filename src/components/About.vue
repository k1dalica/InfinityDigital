<template>
  <section id="about">
    <Heading title="About" :percent="40" />
  </section>
</template>

<script>
import Heading from './Heading'

export default {
  name: 'About',
  data () {
    return {
    }
  },
  components: {
    Heading
  }
}
</script>

<style scoped>

</style>