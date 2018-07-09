<template>
    <el-row>
        <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 1">
            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image">
                <div style="padding: 14px;">
                    <span>Vue Cap</span><br>
                    <span>Caps</span><br>
                    <span>Kshs 3000</span>
                    <div class="bottom clearfix">
                        <el-button type="text" class="button"> Buy </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped >

    .bottom {
        margin-top: 13px;
        line-height: 12px;
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