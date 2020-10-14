<template>
  <div class="heading">
    <div class="wrapper">
      <h1>{{ title }}</h1>
      <div class="line" />
      <h2 v-if="subtitle">{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    title: {
      type: String,
      required: true
    },

    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
  .wrapper {
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 50px;
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 47px;
      font-weight: 800;
      margin: 0 auto;
      position: relative;
      display: inline-block;
      text-align: center;
      color: #2d344a;
    }
    h2 {
      display: block;
      width: 100%;
      max-width: 800px;
      margin: 20px auto;
      font-size: 29px;
      color: #888;
      font-weight: 200;
    }
    .line {
      margin: 0 auto;
      width: 300px;
      height: 1px;
      background-color: #d8dee4;
      margin-top: 20px;
      i {
        display: block;
        height: 1px;
        background-color: $primary;
      }
    }
  }
}
@media all and (max-width: 768px) {
  .heading {
    .wrapper {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 23px;
      }
    }
  }
}
@media all and (max-width: 450px) {
  .heading {
    .wrapper {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 17px;
        color: #444;
      }
    }
  }
}
</style>
