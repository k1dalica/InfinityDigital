<template>
  <section
    id="portfolio"
    class="full-size">
    <div class="wrapper">
      <heading
        :title="$tc('work.title')"
        :subtitle="$tc('work.subtitle')"
        class="heading" />

      <swiper :options="swiperOption">
        <swiper-slide v-for="item in portfolio" :key="item.title">
          <PortfolioCard v-bind="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import iReikon from '@/assets/images/portfolio/reikon.jpg'
import iFill from '@/assets/images/portfolio/fill.jpg'
import iMondial from '@/assets/images/portfolio/mondial90.jpg'
import iKoturanovic from '@/assets/images/portfolio/koturanovic.jpg'
import iWFF from '@/assets/images/portfolio/wff.jpg'
import iNamestaj from '@/assets/images/portfolio/namestaj-zivkovic.jpg'
import iTijana from '@/assets/images/portfolio/tijana-medan.jpg'
// import iMerryed from '@/assets/images/portfolio/merryed.png'
// import iTravel from '@/assets/images/portfolio/travel.png'

import Heading from '../common/Heading'
import PortfolioCard from '../common/PortfolioCard'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'Portfolio',

  components: {
    Heading,
    PortfolioCard
  },

  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        resizeReInit: true,

        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },

  computed: {
    portfolio () {
      return [
        {
          image: iMondial,
          title: 'Mondial90 - TimePad Project',
          text: this.$tc('portfolio.mondial'),
          link: 'https://www.mondial90.rs',
          timepad: true
        },
        {
          image: iFill,
          title: 'Fill.rs - TimePad Project',
          text: this.$tc('portfolio.fill'),
          link: 'http://fill.rs',
          timepad: true
        },
        {
          image: iKoturanovic,
          title: 'Bojan Koturanovic',
          text: this.$tc('portfolio.bojan'),
          link: 'http://www.bojankoturanovic.com'
        },
        {
          image: iNamestaj,
          title: 'Nameštaj Živković',
          text: this.$tc('portfolio.namestaj'),
          link: 'https://www.namestajzivkovic.rs'
        },
        {
          image: iTijana,
          title: 'Tijana Medan',
          text: this.$tc('portfolio.tijana'),
          link: 'https://tijanamedan.com/'
        },
        {
          image: iWFF,
          title: 'WFF - Tournament Registration App',
          text: this.$tc('portfolio.wff'),
          link: 'http://registrations.fudokan-wff.com'
        },
        {
          image: iReikon,
          title: 'Reikon Karate',
          text: this.$tc('portfolio.reikon'),
          link: 'https://www.reikonkarate.com'
        }
        // {
        //   image: iTravel,
        //   title: null,
        //   text: null
        // },
        // {
        //   image: iMerryed,
        //   title: null,
        //   text: null,
        //   link: null
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    min-height: 100%;
    .heading {
      padding: 0 30px;
      box-sizing: border-box;
    }
    .wrapper {
      width: 100%;
    }
  }
</style>
