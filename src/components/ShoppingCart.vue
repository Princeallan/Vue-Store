<template>
<div>
    <el-col >
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;" v-for="(product, index) in products" :key="index" :offset="index > 0 ? 1 : 1">
                <span style="color: #0074D9">{{ product.name }} </span>
                <span> $ {{ product.price }}</span>
                <span> {{ product.quantity }}</span>
                <button @click="removeProductFromCart(index)">&times;</button>
            </div>
            <div class="bottom clearfix">
                <el-button> $ {{total}}</el-button>
            </div>
        </el-card>
    </el-col>
</div>

</template>
<script>

    export default {
        data(){
            return{
                product:[]
            }
        },
        computed:{
            products(){
                return this.$store.getters.cartProducts
            },
            total(){
                return this.$store.getters.cartTotal
            }
        },
        methods: {
            removeProductFromCart(index) {
                this.$store.dispatch('removeFromCart', index);

            }
        }
    }

</script>