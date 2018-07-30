<template>
    <div id="addproduct">
        <el-row >
            <el-form :span="16" v-model="product" label-width="120px">
                <el-form-item>
                    <el-input type="text" placeholder="Product Name" required v-model="product.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="text" placeholder="Category" v-model="product.category"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="number" placeholder="Price" v-model="product.price"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="number" placeholder="Inventory" v-model="product.inventory"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addProduct()" id="button">Add Product</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-col :span="5" v-for="(product, index) in products" :key="index" :offset="index > 0 ? 1 : 1">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/cap2.jpg" class="image">
                    <div style="padding: 14px;">
                        <span style="color: #880000">{{ product.name }} </span><br>
                        <span>{{ product.category }}</span><br>
                        <span> {{ product.inventory }} | {{ product.price }}</span>
                        <div class="bottom clearfix">
                            <el-button type="button primary"  @click="addToCart(product, index)"> Buy</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: 'AddProduct',
        data() {
            return {
                product: {
                    name: '',
                    category: '',
                    price: '',
                    inventory: ''
                }
            }
        },
        computed: {
            products() {
                return this.$store.getters.availableProducts
            }

        },
        methods: {
            addProduct: function () {
                this.$store.dispatch('addProduct', this.product).then(() => {
                    this.product = {};
                });
            },

            addToCart: function (product, index) {
                product.id = index;
                // console.log(index);
                this.$store.dispatch('addToCart', product)
            },

        }
    }

</script>

<style>
    el-input {
        width: 100%;
        margin-top: 10px;
    }


    .bottom {
        margin-top: 13px;
        line-height: 12px;
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