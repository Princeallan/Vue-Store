import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home';
import productList from '../components/ProductList';
import sidebar from '../components/sidebar';
import Login from '../components/login';
import signup from '../components/signUp';
import cart from '../components/ShoppingCart';
import Addproduct from '../components/AddProduct';
import admin from '../admin/Dashboard';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Login
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
            path: 'productList',
            name: 'productList',
            component: productList
        },
        {
            path: 'sidebar',
            name: 'sidebar',
            component: sidebar
        },
        {
            path: 'cart',
            name: 'cart',
            component: cart
        },
        {
            path: 'addproduct',
            name: 'addproduct',
            component: Addproduct,
        },
        {
            path: 'admin',
            name: 'admin',
            component: admin
        }
    ],
    mode: 'history'
})
