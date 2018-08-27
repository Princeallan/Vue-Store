<template>

    <el-row>

        <productItem v-for="(product) in products"  :prod="product" :key="product.id"></productItem>

    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex';
    import productItem from './ProductItem';


    export default {

        components: { productItem },

        computed:{
            ...mapGetters({
                products: 'availableProducts',
            }),
        }
    }

</script>