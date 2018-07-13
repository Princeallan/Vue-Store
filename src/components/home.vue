<template>
    <div id="home">
        <el-row>
            <navbar></navbar>
        </el-row>

        <el-row class="content">
            <el-col :span="4" :offset="1">
                <sidebar></sidebar>
            </el-col>

            <el-col :span="16">
                <router-view></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import navbar from './NavBar.vue'
    import slider from './slider'
    import ProductList from './ProductList'
    import sidebar from './sidebar'

    export default {
        name: 'home',

        components: {
            navbar,
            slider,
            ProductList,
            sidebar,
        }
    }

</script>

<style>

    .content {
        margin-top: 10px;
    }
</style>