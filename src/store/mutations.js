const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export default {
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
}