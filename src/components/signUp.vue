<template>

    <el-form label-width="50px" :model="user" status-icon :rules="rules2">
        <el-form-item label="Name">
            <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="user.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="user.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('user')">Submit</el-button>
            <el-button @click="resetForm('user')">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data(){
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                } else {
                    if (this.user.checkPass !== '') {
                        this.$refs.user.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                } else if (value !== this.user.pass) {
                    callback(new Error('Two inputs don\'t match!'));
                } else {
                    callback();
                }
            };
            return{
                user: {
                    name: '',
                    email: '',
                    pass:''
            },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                methods: {
                    submitForm(user) {
                        this.$refs[user].validate((valid) => {
                            if (valid) {
                                alert('submit!');
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                    },
                    resetForm(user) {
                        this.$refs[user].resetFields();
                    }
                }
            }
        }

    }
</script>