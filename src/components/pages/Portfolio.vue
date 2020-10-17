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
      portfolio: [
        {
          image: iMondial,
          title: 'Mondial90 - TimePad Project',
          text: 'Fully modern presentational website with CMS to fully manage pages and SEO for better targeting.',
          link: 'https://www.mondial90.rs',
          timepad: true
        },
        {
          image: iFill,
          title: 'Fill.rs - TimePad Project',
          text: 'Multilanguage presentational website with blog and CMS.',
          link: 'http://fill.rs',
          timepad: true
        },
        {
          image: iKoturanovic,
          title: 'Bojan Koturanovic',
          text: 'Portfolio website with CMS to manage everything on it. Our friend Bojan is very creative concept artist. Check him out!',
          link: 'http://www.bojankoturanovic.com'
        },
        {
          image: iNamestaj,
          title: 'Nameštaj Živković',
          text: 'Furniture shop with online ordering. Products and orders areeasily managed through CMS.',
          link: 'https://www.namestajzivkovic.rs'
        },
        {
          image: iTijana,
          title: 'Tijana Medan',
          text: 'E-commerce book selling website with online payment system via credit cards or PayPal.',
          link: 'https://tijanamedan.com/'
        },
        {
          image: iWFF,
          title: 'WFF - Tournament Registration App',
          text: 'Online tournament registration system. Members of World Fudokan Federation from all around the globe can easily submit application to compete in WORLD FUDOKAN KARATE CHAMPIONSHIP.',
          link: 'http://registrations.fudokan-wff.com'
        },
        {
          image: iReikon,
          title: 'Reikon Karate',
          text: 'Fully custimizable website/blog made for Reikon Karate Klub from Kraljevo. Most complex CMS we have ever built that is similar to WordPress.',
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
      ],

      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // autoResize: true,
        resizeReInit: true,

        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
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
