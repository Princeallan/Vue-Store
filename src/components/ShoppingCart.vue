<template>
    <div>
        <el-col>

            <el-badge class="badge" :value="products.length">
                <el-button type="text" @click="dialogTableVisible = true"><i class="el-icon-goods"></i> Cart</el-button>
            </el-badge>
            <el-dialog title="My Shopping Cart" :visible.sync="dialogTableVisible">

                <div>
                    <table id="cartTable">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th width="50px">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :data="products" style="padding: 14px;" v-for="(product, index) in products" :key="index"
                            :offset="index > 0 ? 1 : 1">
                            <td property="name">{{ product.name }}</td>
                            <td property="category">{{ product.price }}</td>
                            <td property="quantity">{{ product.quantity }}</td>
                            <td>{{ product.price * product.quantity | formatPrice }}</td>
                            <td>
                                <button @click="removeProductFromCart(index)">&times;</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bottom clearfix">
                    <div style="color: #0c5460">Payable Grand Total Kshs. {{total | formatPrice}}</div>
                </div>

            </el-dialog>
        </el-col>
    </div>

</template>
<script>

    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                dialogTableVisible: false,
                product: []
            }
        },
        computed: {
            // ...mapGetters({
            //     cartProducts : 'cartProducts'
            // }),
            products() {
                return this.$store.getters.cartProducts
            },
            total() {
                return this.$store.getters.cartTotal
            },
            totalProductsInCart() {
                return this.$store.getters.cartProducts.length
            }
        },
        methods: {
            removeProductFromCart(index) {
                this.$store.dispatch('removeFromCart', index);

            }
        },
        filters: {
            formatPrice(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        watch: {
            // this.totalProductsInCart();
        }
    }

</script>

<style>
    el-badge__content {
        background-color: teal !important;
    }

    #cartTable {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #cartTable td, #cartTable th {
        border: none;
        padding: 8px;
    }

    #cartTable tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    #cartTable tr:hover {
        background-color: #ddd;
    }

    #cartTable th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #306cba;
        color: white;
    }

</style>