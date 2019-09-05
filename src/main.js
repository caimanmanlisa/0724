import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper)


// import "./lib/hotcss/hotcss.js";

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
