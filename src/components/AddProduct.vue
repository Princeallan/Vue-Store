<template>
    <div id="addproduct">
            <el-button type="text" @click="dialogTableVisible = true"><i class="el-icon-circle-plus-outline"></i> Add Product</el-button>

        <el-dialog title="Add Products" :visible.sync="dialogTableVisible">
            <el-form v-model="product" >
                <el-form-item>
                    <el-input type="text" placeholder="Product Name" required v-model="product.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="text" placeholder="Category" v-model="product.category"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="text" placeholder="Description" v-model="product.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="number" placeholder="Price" v-model="product.price"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="number" placeholder="Quantity" v-model="product.quantity"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addProduct()" id="button">Add Product</el-button>
                </el-form-item>
            </el-form>

        </el-dialog>
        <!--<el-row>-->
        <!--</el-row>-->
    </div>
</template>

<script>

    export default {
        data() {
            return {
                product: {
                    name: '',
                    category: '',
                    price: '',
                    quantity: '',
                    description:''
                },
                dialogTableVisible: false
            }
        },
        methods: {
            addProduct: function () {
                this.product.quantity= Number(this.product.quantity);
                this.product.cartQuantity=1;
                this.$store.dispatch('addProduct', this.product).then(() => {
                    this.product = {};

                    this.dialogTableVisible = false;

                    this.$notify({
                        title: 'Success',
                        message: 'Product successfully added ',
                        type: 'success'
                    });
                });
            },

            addToCart: function (product, index) {
                product.id = index;
                this.$store.dispatch('addToCart', product)
            },

        }
    }

</script>

<style>
    el-input {
        width: 100%;
        margin-top: 10px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
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