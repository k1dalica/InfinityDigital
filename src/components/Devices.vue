<template>
  <div>
    <img src="./../assets/kosa-crta.png" class="fullw">
    <section class="devices">
      <Heading title="One website, all devices" :percent="40" />

      <span>We are making websites which will look good and clean on any device same as on your desktop computer</span>
      <div class="image-wrapper">
        <img src="./../assets/devices.png">
      </div>
    </section>
  </div>
</template>

<script>
import Heading from './Heading'

export default {
  name: 'Devices',
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
  .fullw { width: 100%; display: block; }
  .devices { background-color: #f5f5f5; background-image: url(./../assets/devices-font.png); background-repeat: no-repeat; background-position: center 200px;; text-align: center; padding-top: 100px; }
  .devices span { display: block; width: 100%; max-width: 800px; margin: 0 auto; font-size: 29px; color: #888; }
  .devices .image-wrapper { background-image: url(./../assets/devices-bg.png); background-repeat: repeat-x; text-align: center; margin-top: 50px; }
  .devices .image-wrapper img { margin: 0 auto; display: block; }
</style>
