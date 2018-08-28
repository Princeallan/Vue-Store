<template>
    <div>
{{email}}
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                v-if="isLoggedIn" >
            <el-menu-item index="4" v-if="isAdmin">
                <AddProduct></AddProduct>
            </el-menu-item>
            <el-menu-item index="4">
                <shoppingCart></shoppingCart>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span><router-link to="/login" v-if="!isLoggedIn">Login</router-link>
                    <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
                </span>
            </el-menu-item>
            <el-menu-item index="5" v-if="!isLoggedIn">
                <i class="el-icon-setting"></i>
                <span><router-link to="/signup">SignUp</router-link>
                </span>
            </el-menu-item>
        </el-menu>
    </div>

</template>
<script>
    import shoppingCart from './ShoppingCart'
    import firebase from 'firebase'
    import AddProduct from './AddProduct'

    export default {

        data() {
          return {
              email: this.$session.get('email'),
              // email: this.$localStorage.get('email')
          }
        },
        created() {


        },

        methods: {
            logout: function () {
                this.$store.dispatch('logout');
                this.email = '';
                this.$session.destroy();
                this.$router.push("/");
                // let vm = this;
                // firebase.auth().signOut().then(() => {
                //     vm.$router.push('login');
                // })

            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            shoppingCart,
            AddProduct
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            },

            isAdmin(){
                let user = firebase.auth().currentUser;
                this.email=user.email;
                if (user.email === "akirui@cytonn.com") {

                  return   true;
                }
              // return this. email ==="akirui@cytonn.com";
            }
        }
    }
</script>

<style>
    a {
        color: #008080;
    }
    .active {
        display: block !important;
    }

    .not-active {
        display: none;
    }
</style>