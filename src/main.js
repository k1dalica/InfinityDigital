import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/style/main.scss'
import 'swiper/dist/css/swiper.css'

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

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
