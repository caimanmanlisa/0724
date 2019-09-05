import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Bank from './views/Bank.vue'
import Gonglue from './views/Gonglue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /*
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/',
      name: 'product',
      component:Product
    },
    
    {
      path: '/',
      name: 'bank',
      component:Bank
    },
    */
    {
      path: '/',
      name: 'gonglue',
      component:Gonglue
    },
  ]
})
