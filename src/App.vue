<template>
  <div id="app">
    <cookies />

    <navigation />

    <home />

    <services />

    <devices />

    <portfolio />

    <design-rush />
    <!-- <hosting /> -->

    <contact />

    <newsletter />

    <footer-view />
  </div>
</template>

<script>
import Navigation from './components/layout/Header'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Devices from './components/pages/Devices'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
// import Hosting from './components/pages/Hosting'
import DesignRush from './components/pages/DesignRush'
import Newsletter from './components/pages/Newsletter'
import FooterView from './components/layout/Footer'
import Cookies from './components/common/Cookies'
// import Blog from './components/pages/Blog'
// import About from './components/pages/About'

export default {
  name: 'App',

  components: {
    Cookies,
    Navigation,
    Home,
    Services,
    Devices,
    Portfolio,
    DesignRush,
    Newsletter,
    Contact,
    FooterView
  },

  created () {
    const lang = localStorage.getItem('lang')
    this.$i18n.locale = ['en', 'rs'].includes(lang) ? lang : 'en'
  }
}
</script>
