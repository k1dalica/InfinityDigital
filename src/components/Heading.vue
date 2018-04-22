<template>
  <div class="heading">
    <div class="wrapper">
      <h1 v-text="title" />
      <div class="line"><i :style="{ 'width': percent + '%' }" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title', 'percent']
}
</script>

<style scoped>
.heading { text-align: center; }
.heading .wrapper { display: inline-block; margin: 0 auto; margin-bottom: 50px; }
.heading .wrapper h1 { font-size: 55px; font-weight: 100; margin: 0 auto; position: relative; display: inline-block; text-align: center; }
.heading .wrapper .line { width: 100%; height: 1px; background-color: #d8dee4; margin-top: 20px; }
.heading .wrapper .line i { display: block; height: 1px; background-color: #00d4cb; }
</style>
