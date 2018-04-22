<template>
  <div id="app">
    <Navigation />

    <Home />

    <Services />

    <Devices />

    <Portfolio />

    <Newsletter />

    <Contact />

    <FooterView />
  </div>
</template>

<script>
import Navigation from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Devices from './components/Devices'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Random from './components/Random'
import Newsletter from './components/Newsletter'
import Blog from './components/Blog'
import About from './components/About'
import FooterView from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Services,
    Devices,
    Portfolio,
    Random,
    Newsletter,
    Blog,
    About,
    Contact,
    FooterView
  }
}
</script>

<style>
body, html { width: 100%; height: 100%; min-height: 100%; margin: 0; padding: 0; font-family: 'Lato', sans-serif; font-weight: 300; cursor: url(/assets/images/cursor.png), auto !important; }
a { text-decoration: none; color: inherit; }
img { outline: none; border: none; }

.width-100 { width: 100%; }
.width { width: 1280px; }

.mr-5 { margin-right: 5px; }
.mr-10 { margin-right: 10px; }
.mr-15 { margin-right: 15px; }
.mr-20 { margin-right: 20px; }

.mb-5 { margin-bottom: 5px; }
.mb-10 { margin-bottom: 10px; }
.mb-15 { margin-bottom: 15px; }
.mb-20 { margin-bottom: 20px; }

.mt-5 { margin-top: 5px; }
.mt-10 { margin-top: 10px; }
.mt-15 { margin-top: 15px; }
.mt-20 { margin-top: 20px; }

.floatl { float: left; }
.floatr { float: right; }
.clear { clear: both; }
.ta-l { text-align: left; }
.ta-r { text-align: right; }
.ta-c { text-align: center; }
.padding-0 { padding: 0px; }
.hidden { display: none !important; }

h1, h2 { margin: 0; }
#app { width: 100%; height: 100%; }

.full-size { display: flex; width: 100%; min-height: 100%; justify-content: center; align-items: center; padding: 100px 10px; box-sizing: border-box; }
</style>
