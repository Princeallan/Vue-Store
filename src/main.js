// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import {store} from "./store/store";
import firebase from 'firebase';
import './firebase_init';

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ElementUI, {locale});
Vue.use(BootstrapVue);


Vue.config.productionTip = false;
let app;
firebase.auth().onAuthStateChanged(function (user) {
 if(!app){
     new Vue({
         el: '#app',
         router,
         store,
         components: {App},
         template: '<App/>'
     });
 }
});


