<template>
    <div id="addproduct">
        <el-form v-model="product" >
            <el-input type="text" placeholder="Product Name" v-model="product.name"></el-input>
            <el-input type="text" placeholder="Category" v-model="product.category"></el-input>
            <el-input type="number" placeholder="Price" v-model="product.price"></el-input>
            <el-button type="button" @click="addProduct()" id="button">Add Product</el-button>
        </el-form>

        <el-col :span="4" v-for="(product, index) in getProducts" :key="product" :offset="index > 0 ? 1 : 1">
            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image">
                <div style="padding: 14px;">
                    <span>{{ product.name }}</span><br>
                    <span>{{ product.category }}</span><br>
                    <span>{{ product.price }}</span>
                    <div class="bottom clearfix">
                        <el-button type="text" class="button"> Buy </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <!--<div v-for="product in getProducts">{{ product.name }}</div>-->
        <!--<div v-for="product in getProducts">{{ product.category }}</div>-->
        <!--<div v-for="product in getProducts">{{ product.price }}</div>-->
    </div>
</template>

<script>

    import navbar from './NavBar.vue'
    import {mapGetters} from 'vuex'

export default {
    name: 'AddProduct',
    data () {
        return{
                product: {
                    name:'',
                    category:'',
                    price:''
                }
            }
    },
    computed: {
        ...mapGetters({
            products: 'products'
        }),

        getProducts(){
            return this.products;

        }
        // getProducts(){
        //     return this.$store.getters.products;
        // }
    },
    components:{
      navbar
    },
    methods: {
        addProduct: function(){
            this.$store.dispatch('addProduct', this.product).then(()=>{
                this.product={};
            });

        }
    }
}

</script>

<style>
    el-input{
        width: 100%;

    }
    form{
        margin: auto 300px;
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