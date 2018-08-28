import Vue from 'vue'
import Vuex from 'vuex'
import VueSession from 'vue-session';
import actions from './actions';
import mutations from './mutations';

Vue.use(VueSession);

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        products: [
            {"id": 1, "name": "Tshirt", "category": "Clothing", "description": "Cotton fashion Turkey made", "quantity": 10, "price": 50},
            {"id": 2, "name": "Cap", "category": "Men", "description": "Cotton new fashion Nigerian made", "quantity": 10, "price": 200},
            {"id": 3, "name": "Watch", "category": "Women", "description": "Fashion Ugandan made", "quantity": 10, "price": 500},
            {"id": 4, "name": "Blazer", "category": "Kids", "description": "Cotton, Kenyan made", "quantity": 10, "price": 80}
        ],
        isLoggedIn: !!localStorage.getItem("token"),
        cart: [],
        users: [],
        checkout: null

    },
    getters: {
        availableProducts(state) {
            return state.products.filter(product => product.quantity > 0)
        },

        isLoggedIn: state => {
            return state.isLoggedIn
        },

        cartProducts(state) {
            return state.cart;
        },

        cartTotal(state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.cartQuantity, 0)
        },

    },
    mutations: mutations,
    actions: actions,
});