<template>
    <div>
        <el-col>

            <el-badge class="badge" :value="cartProducts.length">
                <el-button type="text" @click="dialogTableVisible = true"><i class="el-icon-goods"></i> Cart</el-button>
            </el-badge>
            <el-dialog title="My Shopping Cart" :visible.sync="dialogTableVisible">

                <div>
                    <table id="cartTable">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th width="100px">Quantity</th>
                            <th width="100px">Quantity</th>
                            <!--<th>+/-</th>-->
                            <th>Total Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :data="cartProducts" style="padding: 14px;" v-for="(cartProduct, index) in cartProducts"
                            :key="index"
                            :offset="index > 0 ? 1 : 1">
                            <td property="name">{{ cartProduct.name }}</td>
                            <td property="category">{{ cartProduct.price }}</td>
                            <!--<td property="quantity">{{ cartProduct.quantity }}</td>-->
                            <td width="100px">

                                <el-input type="number" class="addQty" :value="cartProduct.cartQuantity" :min="1"
                                          :max="cartProduct.quantity"></el-input></td>
                            <td>
                                <button @click="incrementQty(cartProduct)" :min="1"
                                        :max="cartProduct.quantity"><i class="el-icon-circle-plus-outline"></i>
                                </button>
                                <button @click="decreaseQty(cartProduct)"><i class="el-icon-remove-outline"></i>
                                </button>
                            </td>
                            <td>{{ cartProduct.price * cartProduct.cartQuantity | formatPrice }}</td>
                            <td>
                                <button @click="removeProductFromCart(index)">&times;</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bottom clearfix">
                    <div style="color: #0c5460"><p>Payable Grand Total Kshs. {{total | formatPrice}}</p></div>
                    <button class="btn btn-danger pull-right" @click="checkout"> Checkout</button>
                    <!--<p v-if="CheckoutStatus">{{ CheckoutStatus }}</p>-->
                </div>

            </el-dialog>
        </el-col>
    </div>

</template>
<script>

    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                dialogTableVisible: false,
                product: [],
            }
        },
        computed: {
            ...mapGetters({
                cartProducts: 'cartProducts',
                products: 'availableProducts',
                total: 'cartTotal'
            }),
            ...mapState({
                checkoutStatus: 'checkoutStatus'
            })

        },
        methods: {
            // ...mapActions(['checkout']),
            removeProductFromCart(index) {
                this.$store.dispatch('removeFromCart', index)

            },

            incrementQty(cartProduct) {

                if(cartProduct.cartQuantity<cartProduct.quantity){
                    this.$store.dispatch('incrementCartItemQty', cartProduct).then(()=>{
                        this.$store.dispatch('incrementProductQty', cartProduct)
                    })
                }
            },
            decreaseQty(cartProduct) {
                this.$store.dispatch('decrementCartItemQty', cartProduct)
            },
            checkout() {
                alert('Pay us Kshs ' + this.total)
            }
        },
        filters: {
            formatPrice(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        watch: {}
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

    button {
        border: none;
        background-color: transparent;
    }

    /*.addQty{*/
    /*width: 100px;*/
    /*}*/

</style>