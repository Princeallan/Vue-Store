<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Login</span>
            </div>
            <el-form @submit.prevent="login({ email, password })" :offset="6">
                <el-form-item>
                    <el-input type="text" placeholder="Email" onautocomplete="false" v-model="email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" placeholder="Secret" v-model="password"></el-input>
                </el-form-item>
                <!--<button type="submit" @click="login" >Login</button>-->
                <el-button type="submit" @click="login">Login</el-button>
                Or create an account
                <el-button type="button"><span><router-link to="/signup">SignUp</router-link></span></el-button>
            </el-form>
        </el-card>

    </div>

</template>
<script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login() {
                let vm = this;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((resp) => {
                    vm.$store.dispatch('login').then(() => {
                        if (this.email === "akirui@cytonn.com") {

                            vm.$session.set("email", "akirui@cytonn.com");
                            // Vue.localStorage.set('email', 'akirui@cytonn.com');

                            vm.$router.push({name: "admin"});

                        } else {

                            vm.$session.set("email", this.email);

                            vm.$router.push({name: "productList"})

                        }

                    });

                }).catch(error => {
                    console.log(error.message);
                })
            },

        },
    }

</script>
<style>


    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    el-input {

    }

    .box-card {
        margin-left: 80px;
        width: 480px;
    }

</style>