const _products = [
    {"id": 1, "name": "Vue Tshirt", "category": "Clothing", "quantity": 10, "price": 50},
    {"id": 2, "name": "Vue Cap", "category": "Men", "quantity": 10, "price": 200},
    {"id": 3, "name": "Vue Ladies Watch", "category": "Women", "quantity": 10, "price": 500},
    {"id": 4, "name": "Vue Tshirt", "category": "Kids", "quantity": 10, "price": 80}
];
export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {

            // simulating random checkout failure
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb
        }, 100)
    }
}