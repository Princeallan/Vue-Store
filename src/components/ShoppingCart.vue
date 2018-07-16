<template>
<div>
    <el-col >
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;" v-for="(product, index) in products" :key="index" :offset="index > 0 ? 1 : 1">
                <span>{{ product.name }} </span>
                <span> $ {{ product.price }}</span>
                <span> {{ product.quantity }}</span>
            </div>
            <div class="bottom clearfix">
                <el-button> $ {{total}}</el-button>
            </div>
        </el-card>
    </el-col>
</div>



    <!--<div>-->
        <!--<h4>Shopping Cart</h4>-->
        <!--<ul>-->
            <!--<li v-for="product in products">-->
                <!--{{product.name}} | {{product.price}} | {{product.quantity}} </li>-->
            <!--<li>-->
                <!--{{total}}-->
            <!--</li>-->
        <!--</ul>-->
    <!--</div>-->

</template>
<script>

    export default {
        computed:{
            products(){
                return this.$store.getters.cartProducts
            },
            total(){
                return this.$store.getters.cartTotal
            }
        }
    }

</script>