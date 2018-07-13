<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Women</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">T-shirsts</el-menu-item>
                <el-menu-item index="1-2">Shoes</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Men</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="2-1">Shirts</el-menu-item>
                <el-menu-item index="2-2">Trousers</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span>Brands</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span><router-link to="/login" v-if="!isLoggedIn">Login</router-link>
                    <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
                </span>
        </el-menu-item>
        <el-menu-item index="5" v-if="!isLoggedIn">
            <i class="el-icon-setting"></i>
            <span><router-link to="/login">SignUp</router-link>
                </span>
        </el-menu-item>
        <el-menu-item index="">
            <shoppingCart></shoppingCart>
        </el-menu-item>
    </el-menu>
</template>
<script>
import shoppingCart from './ShoppingCart'
    export default {
        methods: {
            logout: function () {
                this.$store.dispatch('logout');
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
            // ...Vuex.mapActions(["logout"])
        },
        components:{
            shoppingCart
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            },
            // ...Vuex.mapGetters(["isLoggedIn"])
        }
    }
</script>

<style>
    a {
        color: #008080;
    }
</style>