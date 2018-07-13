<template>
<div>
    <el-col v-for="(product, index) in products" :key="index" :offset="index > 0 ? 1 : 1">
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
                <span>{{ product.name }} </span><br>
                <span>{{ product.price }}</span><br>
                <span> {{ product.quantity }}</span>
                <div class="bottom clearfix">
                    <el-button type="button" class="button"> {{total}} </el-button>
                </div>
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