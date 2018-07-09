<template>
    <div class="navbar">
        <el-row>
            <el-col :span="20">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">Vue Merchandise</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">Categories</template>
                        <el-menu-item index="2-1">Tees</el-menu-item>
                        <el-menu-item index="2-2">Hoodies</el-menu-item>
                        <el-menu-item index="2-3">Caps</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2"> <router-link :to="{name: 'addproduct'}">Add Product</router-link></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="4">
                <el-button type="text" @click="loginFormVisible = true"> Login</el-button>
                <el-button type="text" @click="signupFormVisible = true"> SignUp</el-button>

            </el-col>
        </el-row>

        <!--Login Form -->
        <el-dialog title="Sign In " :visible.sync="loginFormVisible">
            <el-form :model="user">
                <el-form-item label="Username :" :label-width="formLabelWidth">
                    <el-input v-model="user.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password :" :label-width="formLabelWidth">
                    <el-input v-model="user.password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="loginFormVisible = false">Back</el-button>
            <el-button type="primary" @click="loginFormVisible = false">Login</el-button>
          </span>
        </el-dialog>

        <!--Sign Up Form -->
        <el-dialog title="Sign In " :visible.sync="signupFormVisible">
            <el-form :model="user">
                <el-form-item label="Username :" :label-width="formLabelWidth">
                    <el-input v-model="user.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password :" :label-width="formLabelWidth">
                    <el-input v-model="user.password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="signupFormVisible = false">Back</el-button>
            <el-button type="primary" @click="signupFormVisible = false">Login</el-button>
          </span>
        </el-dialog>

    </div>
</template>


<script>
    export default {
        name:'navbar',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                loginFormVisible: false,
                signupFormVisible:false,
                user: {
                    name: '',
                    password: ''

                },
                formLabelWidth: '80px'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

        }
    }
</script>

<style scoped>

    .bottom {
        margin-top: 13px;
        line-height: 10px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>