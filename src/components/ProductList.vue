<template>
    <el-row>
        <el-col :span="7" style="margin: 10px;" class="dnc" v-for="(product, index) in products" :key="index" >
            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image">
                <div style="padding: 14px;">
                    <b >Name: </b><span>{{ product.name }} </span><br>
                    <b>Price: </b><span>{{ product.price }} </span><br>
                    <b>Category: </b><span>{{ product.category }}</span><br>
                    <span><b>Available: </b> {{ product.quantity }} </span>
                    <div class="bottom clearfix">
                        <el-button type="primary" @click="addToCart(product, index)"> Buy <i class="el-icon-goods"></i></el-button>
                        <productDetails :prod="product">
                            <el-button slot="cartbutton" type="primary" @click="addToCart(product, index)"> Buy</el-button>
                        </productDetails>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

    import {mapGetters} from 'vuex';
    import productDetails from '../components/ProductDetails'

    export default {
        data() {
            return {
                product: {
                    name: '',
                    category: '',
                    price: '',
                    quantity: 0
                }
            }
        },

        components: {
            productDetails
        },
        computed: {
            ...mapGetters({
                products: 'availableProducts',

            }),
        },

        methods: {
            addProduct: function () {
                this.$store.dispatch('addProduct', this.product).then(() => {
                    this.product = {};

                    this.$notify({
                        title: 'Success',
                        message: 'Product successfully added ',
                        type: 'success'
                    });

                });
            },

            addToCart: function (product, index) {
                product.id = index;
                product.cartQuantity=1;
                this.$store.dispatch('addToCart', product).then(() => {

                    this.$notify({
                        title: 'Success',
                        message: 'Product added to cart',
                        type: 'success'
                    });
            })
            }
        },

    }

</script>

<style scoped>

    .dnc {
        margin: 5px;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>