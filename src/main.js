import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import lang from './lang'
import VueScrollTo from 'vue-scrollto'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/style/main.scss'
import 'swiper/dist/css/swiper.css'

Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

const i18n = new VueI18n({
  locale: 'rs',
  messages: lang
})

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
