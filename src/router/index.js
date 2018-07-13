import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import addproduct from '../components/AddProduct'
import productList from '../components/ProductList'
import sidebar from '../components/sidebar'
import Login from '../components/login'
import signup from '../components/signUp'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: productList
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: signup
        },
        {
            path: 'addproduct',
            name: 'addproduct',
            component: addproduct
        },
        {
            path: 'productList',
            name: 'productList',
            component: productList
        },
        {
            path: 'sidebar',
            name: 'sidebar',
            component: sidebar
        }
    ],
    mode: 'history'
})
