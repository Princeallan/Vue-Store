const LOGOUT = "LOGOUT";

export default {
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
}