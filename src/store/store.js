import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const store = new Vuex.Store({
    state: {
        products: [],
        isLoggedIn: !!localStorage.getItem("token"),
        cart: [],

    },
    getters: {
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        },
        isLoggedIn: state => {
            return state.isLoggedIn
        },
        cartProducts(state)
        {
            return state.cart.map(cartItem=>{
                const product=state.products.find(product=>product.id===cartItem.id)
                return{
                    name: product.name,
                    price: product.price,
                    quantity:cartItem.quantity,
                }
            })
        },
        cartTotal(state, getters) {
            //     let total = 0
            //     getters.cartProducts.forEach(product=>{
            //         total +=product.price*product.quantity
            // });
            //     return total
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        }
        },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.products.push(product)
        },
        [LOGIN](state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS](state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        [LOGOUT](state) {
            state.isLoggedIn = false;
        },
        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },
        decrementItemQuantity(state, product) {
            product.inventory--
        }
    },
    actions: {
        addProduct(store, newProduct) {
            store.commit("ADD_PRODUCT", newProduct);
        },
        addToCart(context, product) {
            if (product.inventory > 0) {
                const cartItem = context.state.cart.find(item => item.id === product.id);
                if (!cartItem) {
                    context.commit('pushProductToCart', product.id)
                } else {
                    context.commit('incrementItemQuantity', cartItem)
                }
                context.commit('decrementProductInventory', product)
            }

        },
        login({state, commit, rootState}, creds) {
            console.log("login...", creds);
            commit(LOGIN); // show spinner
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit(LOGIN_SUCCESS);
                    resolve();
                }, 1000);
            });

        },
        logout({
                   commit
               }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        }
    },
});