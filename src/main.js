import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* const bus = new Vue()
Vue.prototype.$bus = bus */

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
