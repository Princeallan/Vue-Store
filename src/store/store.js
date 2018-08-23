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
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    name: product.name,
                    price: product.price,
                    quantity: cartItem.quantity,
                }
            })
        },

        cartTotal(state, getters) {

            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },

    },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.products.push(product)
        },
        ADD_USER: (state, user) => {
            state.users.push(user)
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
            product.quantity--
        },
        deleteProduct(state, index) {
            state.cart.splice(index, 1)
        },
        setCheckoutStatus(state, status) {
            state.CheckoutStatus = status
        },
        modifyCart(state, product) {
            let index = state.cart.indexOf(product);

            if (index) {
                let cartProduct = state.cart[index];
                state.cartCount += product.quantity;

                state.cart.splice(index, 1);
            }
        },
        emptyCart(state){
            state.cart = []
        }
    },
    actions: {
        addProduct(store, newProduct) {
            store.commit("ADD_PRODUCT", newProduct);
        },

        addUser(store, newUser) {
            store.commit("ADD_USER", newUser);
        },

        addToCart(context, product) {
            if (product.quantity > 0) {
                const cartItem = context.state.cart.find(item => item.id === product.id);
                if (!cartItem) {
                    context.commit('pushProductToCart', product.id)
                } else {
                    context.commit('incrementItemQuantity', cartItem)
                }
                context.commit('decrementItemQuantity', product)
            }

        },

        login(state) {
            state.commit('LOGIN_SUCCESS');
        },
        logout({
                   commit
               }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
        },

        removeFromCart(context, index) {
            context.commit('deleteProduct', index)
        },
        checkout({state, commit}) {
            shop.buyProducts(
                state.cart,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () => {
                    commit('setCheckoutStatus', 'fail')

                }
            )
        }
    },
});