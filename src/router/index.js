import Vue from 'vue'
import Router from 'vue-router'
import products from '../components/ProductList'
import NavBar from '../components/NavBar'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavBar',
      component: NavBar
    },
      {
        path: './products',
          name: 'products',
          component: products
      }
  ]
})
