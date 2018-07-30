<template>

    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">Login</span>
        </div>
    <el-form @submit.prevent="login({ email, password })">
        <el-form-item>
        <el-input type="text" placeholder="Email" v-model="email"></el-input>
        </el-form-item>
        <el-form-item>
        <el-input type="password" placeholder="Secret" v-model="password"></el-input>
        </el-form-item>
        <!--<button type="submit" @click="login" >Login</button>-->
        <el-button type="submit" @click="login">Login</el-button>
    </el-form>
    </el-card>

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
                // this.$store.dispatch("login", {
                //     email: this.email,
                //     password: this.password
                // }).then(() => {
                //     this.$router.push("/")
                // });
                let vm = this;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((resp) => {
                    vm.$store.dispatch('login').then(()=>{
                        vm.$router.push({name: "addproduct"});
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
    el-input{

    }

    .box-card {
        margin-left: 80px;
        width: 480px;
    }

</style>