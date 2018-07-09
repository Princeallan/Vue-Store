import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
 export const store = new Vuex.Store({
    state: {
        products: []

    },
     getters: {
        products: state => state.products
     },
     mutations: {
    ADD_PRODUCT:(state, product) => {
             state.products.push(product)
    }
     },
     actions: {
        addProduct(store, newProduct){
            store.commit("ADD_PRODUCT",newProduct);
        }

     },
    }
);