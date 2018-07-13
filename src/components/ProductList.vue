<template>
    <el-row>
        <!--<productslist></productslist>-->
        <el-col :span="5" v-for="(product, index) in products" :key="index" :offset="index > 0 ? 1 : 1">
            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image">
                <div style="padding: 14px;">
                    <span>{{ product.name }} </span><br>
                    <span>{{ product.category }}</span><br>
                    <span> {{ product.inventory }} | {{ product.price }}</span>
                    <div class="bottom clearfix">
                        <el-button type="button" class="button" @click="addToCart(product, index)"> Buy</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

    export default {
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
                console.log(index);
                this.$store.dispatch('addToCart', product)
            }
        }

    }

</script>

<style scoped>

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