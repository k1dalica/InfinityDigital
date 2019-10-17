<template>
  <section
    id="portfolio"
    class="full-size">
    <div class="wrapper">
      <Heading title="Our work" />

      <swiper :options="swiperOption">
        <swiper-slide v-for="index in 10" :key="index">
          <PortfolioCard />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Heading from '../common/Heading'
import PortfolioCard from '../common/PortfolioCard'

export default {
  name: 'Portfolio',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }
  },
  components: {
    Heading,
    PortfolioCard
    // swiper,
    // swiperSlide,
  }
}
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    min-height: 100%;
    .wrapper {
      width: 100%;
    }
  }
</style>
