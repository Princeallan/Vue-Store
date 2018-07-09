<template>
    <div id="home">

        <navbar></navbar>
        <slider></slider>
        <ProductList></ProductList>

    </div>
</template>

<script>
    import navbar from './NavBar.vue'
    import slider from './slider'
    import ProductList from './ProductList'

    export default {
        name: 'home',

        components: {
            navbar,
            slider,
            ProductList
        }
    }

</script>