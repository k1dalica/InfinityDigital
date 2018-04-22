<template>
  <section id="our-work">
    <Heading title="Our work" :percent="40" />

    <swiper :options="swiperOption">
      <swiper-slide v-for="index in 10" :key="index">
        <PortfolioCard />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Heading from './Heading'
import PortfolioCard from './PortfolioCard'

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
    swiper,
    swiperSlide,
    PortfolioCard
  }
}
</script>

<style scoped>
  section { width: 100%; min-height: 100%; }
</style>

<style>
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    padding: 0 100px;
    box-sizing: border-box;
  }
  .swiper-slide {
    width: auto;
  }
</style>
