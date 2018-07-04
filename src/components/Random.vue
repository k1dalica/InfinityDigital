<template>
  <section>
    <h1>Cloud<br>web hosting</h1>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, voluptatibus veniam vero dolorum ipsam architecto quisquam tempora enim minus, natus delectus nulla libero sint dolor.</span>
    <button>Button</button>
    
    <img src="./../assets/services/hosting.png" class="background">
    <img src="./../assets/cloud.png" class="cloud c1">
    <img src="./../assets/cloud.png" class="cloud c2">
    <img src="./../assets/cloud.png" class="cloud c3">
  </section>
</template>

<script>
import Heading from './Heading'
export default {
  name: 'Random',
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
  section { background-color: #3a4149; position: relative; color: #fff; padding: 100px; margin-top: 300px; box-sizing: border-box; }
  section .background { position: absolute; top: 0; right: -200px; height: 100%; }
  section .cloud { position: absolute; z-index: 10; }
  section .c1 { left: 470px; bottom: -50px; }
  section .c2 { left: 150px; top: -50px; width: 120px; }
  section .c3 { left: 600px; top: 100px; width: 70px; }
  section h1 { font-family: 'Lato', sans-serif; font-size: 47px; font-weight: 800; text-transform: uppercase; margin: 0; }
  section span { font-size: 22px; line-height: 30px; display: block; width: 700px; margin-top: 20px; color: #a9b1bd; }
  button { margin-right: 5px; font-family: 'Lato', sans-serif; font-weight: 300; text-transform: uppercase; font-size: 13px; transition: all ease-out 0.2s; margin-top: 50px; height: 45px; padding: 0 50px; background-color: #fff; outline: none; border: 1px solid #fff; border-radius: 25px; color: #000; box-sizing: border-box; }
  button:hover, button:focus { background-color: #fff; color: #000; cursor: pointer; }
</style>