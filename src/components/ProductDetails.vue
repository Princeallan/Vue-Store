<template>

    <div>
        <el-button type="text" @click="dialogTableVisible = true"> View Detail</el-button>

        <el-dialog
                :visible.sync="dialogTableVisible"
                width="45%">
            <h3 class="text-center">Product Details</h3>

            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image" style="height: 200px;width: 200px;">
                <div style="padding: 10px;">
                    <p><b >Name: </b><span>{{ prod.name }} </span></p><br>
                    <p><b>Price: </b> Kshs. <span>{{ prod.price }} </span></p><br>
                    <p><b>Category: </b><span>{{ prod.category }}</span></p><br>
                    <p><b>Description:</b> <span>{{ prod.description }}</span></p><br>
                    <p><span><b>Available: </b> {{ prod.quantity }} | <b>Price:</b> $ {{ prod.price }}</span></p>
                    <div class="bottom clearfix">
                        <slot name="cartbutton"></slot>
                    </div>
                </div>
            </el-card>
        </el-dialog>
    </div>

</template>

<script>

    export default {
        props: ['prod'],

        data() {
            return {
                product: {
                    name: '',
                    category: '',
                    description: '',
                    price: '',
                    quantity: 0
                },
                dialogTableVisible: false
            }
        },


    }

</script>

