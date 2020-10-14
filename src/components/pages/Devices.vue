<template>
  <div>
    <img src="@/assets/images/kosa-crta.png" class="fullw">
    <section id="devices">
      <heading
        :title="$tc('general.one_website_all_devices')"
        :subtitle="$tc('general.one_website_all_devices_txt')"
        class="heading" />
      <div class="image-wrapper">
        <img src="@/assets/images/devices.png">
      </div>
    </section>
  </div>
</template>

<script>
import Heading from '../common/Heading'

export default {
  name: 'Devices',

  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
.fullw {
  width: 100%;
  display: block;
}

#devices {
  background-color: #f5f5f5;
  background-image: url(../../assets/images/devices-font.png);
  background-repeat: no-repeat;
  background-position: center 200px;
  text-align: center;
  padding-top: 100px;
  span {
    display: block;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-size: 29px;
    color: #888;
  }
  .heading {
    padding: 0 30px;
  }
  .image-wrapper {
    background-image: url(../../assets/images/devices-bg.png);
    background-repeat: repeat-x;
    text-align: center;
    img {
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
