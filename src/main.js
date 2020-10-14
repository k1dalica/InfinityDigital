import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import lang from './lang'
import VueScrollTo from 'vue-scrollto'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuelidate from 'vuelidate'
import Toast, { POSITION } from 'vue-toastification'

import 'vue-toastification/dist/index.css'
import '@/assets/style/main.scss'
import 'swiper/dist/css/swiper.css'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(VueI18n)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.use(Toast, {
  timeout: 5000,
  closeOnClick: false,
  position: POSITION.TOP_RIGHT
})
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
  locale: 'en',
  messages: lang
})

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
