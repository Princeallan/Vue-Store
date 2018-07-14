<template>
<div>
    <form @submit.prevent="login({ email, password })">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit" @click="login" >Login</button>
        <!--<el-button type="submit" >Danger</el-button>-->
    </form>

    </div>
</template>
<script>
    import firebase from 'firebase';
    export default {
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
<style scoped>
    a {
        font-size: 17px;
        color: #fff;
        background: grey;
        padding: 10px;
        text-decoration: none;
        margin-right: 0.5rem;
        margin-bottom: 20px;
        display: inline-block;
    }

    * {
        font-family: Arial;
    }

    input, button {
        width: 100%;
        padding: 8px;
        font-size: 20px;
        border-radius: 10px;
        margin: 5px;
    }

</style>