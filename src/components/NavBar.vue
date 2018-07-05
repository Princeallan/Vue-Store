<template>
    <div class="app">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Vue Merchandise</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Categories</template>
                <el-menu-item index="2-1">Tees</el-menu-item>
                <el-menu-item index="2-2">Hoodies</el-menu-item>
                <el-menu-item index="2-3">Caps</el-menu-item>
            </el-submenu>
            <el-button type="text" @click="dialogFormVisible = true"> Login </el-button>
        </el-menu>
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

        <!-- Form -->
        <el-dialog title="Sign In " :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="Username :" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password :" :label-width="formLabelWidth">
                    <el-input v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Back</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Login</el-button>
  </span>
        </el-dialog>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                items:{
                    image:'../assets/logo.png'
                },
                activeIndex: '1',
                activeIndex2: '1',
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '100px'
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
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>