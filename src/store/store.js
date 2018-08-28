import Vue from 'vue'
import Vuex from 'vuex'
import VueSession from 'vue-session'

Vue.use(VueSession);

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

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
        INCREMENTCARTITEMQTY(state, product) {
            state.cart =
                state.cart.map(element => element.id ==
                product.id ? {...element, cartQuantity: Number(product.cartQuantity) + 1} : element);
        },

        DECREMENTCARTITEMQTY(state, product) {
            state.cart =
                state.cart.map(element => element.id ==
                product.id ? {...element, cartQuantity: Number(product.cartQuantity) - 1} : element);
        },

        INCREMENTPRODUCTMQTY(state, product) {
            state.products =
                state.products.map(element => element.id ==
                product.id ? {...element, quantity: Number(product.quantity) + 1} : element);
        },

        pushProductToCart(state, product) {
            state.cart.push(product)
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
        REMOVE_PRODUCT(state, prod_id) {

            let array = state.products;

            let prod = array.find(element => element.id === prod_id);

            const index = array.indexOf(prod);

            array.splice(index, 1);
        },

        setCheckoutStatus(state, status) {
            state.CheckoutStatus = status
        },

        emptyCart(state) {
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
                    context.commit('pushProductToCart', product)
                } else
                    {
                        context.commit('incrementItemQuantity', cartItem)
                    }
                context.commit('decrementItemQuantity', product)
                }
        },

        incrementCartItemQty(store, product) {
            store.commit("INCREMENTCARTITEMQTY", product);
        },
        incrementProductQty(store, product) {
            store.commit("INCREMENTPRODUCTMQTY", product);
        },
        decrementCartItemQty(store, product) {
            store.commit("DECREMENTCARTITEMQTY", product);
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

        removeFromCart(context, product_id) {
            context.commit('deleteProduct', product_id)
        },
        deleteAProduct(context, index) {
            context.commit('REMOVE_PRODUCT', index)
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