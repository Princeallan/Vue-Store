<template>

    <el-row>

        <productItem v-for="(product, index) in products" :key="index" :offset="index" :prod="product"></productItem>

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