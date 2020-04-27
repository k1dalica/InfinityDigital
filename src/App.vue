<template>
  <div id="app">
    <navigation />

    <home />

    <services />

    <devices />

    <portfolio />

    <newsletter />

    <hosting />

    <contact />

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
import Hosting from './components/pages/Hosting'
import Newsletter from './components/pages/Newsletter'
import FooterView from './components/layout/Footer'
// import Blog from './components/pages/Blog'
// import About from './components/pages/About'

export default {
  name: 'App',

  components: {
    Navigation,
    Home,
    Services,
    Devices,
    Portfolio,
    Hosting,
    Newsletter,
    Contact,
    FooterView
  }
}
</script>
