<template>
    <div>
        <el-col :span="7" style="margin: 10px;">
            <el-card :body-style="{ padding: '0px' }">
                <img src="../assets/cap2.jpg" class="image">
                <div style="padding: 14px;">
                    <span>{{ prod.name }} </span><br>
                    <span>{{ prod.category }}</span><br>
                    <span> {{ prod.quantity }} | $ {{ prod.price }}</span>
                    {{index}}
                    <div class="bottom clearfix">
                        <el-button type="warning" icon="el-icon-edit" @click="dialogTableVisible = true"> Edit
                        </el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="removeProduct(prod.id)">Delete
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <el-dialog
                :visible.sync="dialogTableVisible"
                width="40%">
            <h3 class="text-center">Edit Product Details</h3>
            <el-row>
                <el-col>
                    <el-form label-width="150px">
                        <el-form-item label="Model: ">
                            <el-input class="inpt" placeholder="Product Name" v-model="prod.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Category: ">
                            <el-input class="inpt" placeholder="Category" v-model="prod.category"></el-input>
                        </el-form-item>
                        <el-form-item label="Price: ">
                            <el-input class="inpt" v-model="prod.price"></el-input>
                        </el-form-item>
                        <el-input v-model="prod.price" type="hidden" value="1"/>
                        <el-form-item label="Stock: ">
                            <el-input class="inpt" v-model="prod.quantity"></el-input>
                        </el-form-item>

                    </el-form>
                </el-col>
            </el-row>

            <span slot="footer" class="dialog-footer">
                <el-button type="info" @click="dialogTableVisible = false">Cancel</el-button>
                <el-button type="primary" icon="el-icon-edit" @click="dialogTableVisible = false">Update</el-button>
            </span>
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
                    price: '',
                    quantity: 0
                },
                dialogTableVisible: false
            }
        },

        methods: {
            removeProduct(key) {
                this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('deleteAProduct', key);

                    this.$notify({
                        title: 'Success',
                        message: 'Successfully Deleted',
                        type: 'success'
                    });

                }).catch(() => {

                    this.$notify({
                        title: 'Cancelled',
                        message: 'Delete canceled',
                        type: 'info'

                    });
                });

            },
        }
    }

</script>

<style scoped>

    .list-group-item .thumbnail-image {
        margin-right: 10px;
        max-height: 150px;
    }

    .item.list-group-item .thumbnail {
        margin-bottom: 0px;

    }

    .item.list-group-item img {
        float: left;
    }

</style>