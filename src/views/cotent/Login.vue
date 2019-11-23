<template>
    <!--登录-->
    <div>
        <div class="bg">
        </div>
        <el-card class="box-card">
            <el-form :label-position="labelPosition" label-width="1.6rem" :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="账号" prop="name">
                    <el-input type="text" placeholder="请输入账号" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input placeholder="请输入密码" v-model="ruleForm.pass" show-password></el-input>
                </el-form-item>
                <el-form-item label-width="100%">
                    <el-button type="primary">登录</el-button>
                </el-form-item>
            </el-form>
    </el-card>
        <footer>
            <span>山西硬汉科技有限公司 </span><span>版权所有:CopyRight</span><span>&copy;2018-2019</span>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            let validatePass = (rule , value , callback) => {
                if (value === ''){
                    callback(new Error('请输入密码'));
                }else if(value !== ''){
                    this.$refs.ruleForm.validateField('checkPass');
                }else{
                    callback();
                }
            }
            let name = (rule , value , callback) => {
                if( value === ''){
                    callback(new Error('请输入账号'));
                }else{
                    callback();
                }
            }
            return{
                labelPosition:'top',
                input:'',
                password:'',
                formLabelAlign:'',
                ruleForm:{
                    pass:'',
                    name:'',

                },
                rules:{
                    pass:[{
                        validator:validatePass,trigger:'blur'
                    }],
                    name:[{
                       validator:name,trigger: 'blur'
                    }],
                }
            }
        }
    }
</script>

<style scoped>

</style>
<style>
    @import"../../assets/css/rem.css";
    .box-card {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 6rem;
        height: 5rem;
    }
    .bg{
        position: absolute;
        top: 0;
        bottom: 40%;
        width: 100%;
        background-image: url("../../assets/images/backg.png");
    }
    footer{
        position: absolute;
        bottom: 0.1rem;
        left: calc(50% - 2.1rem);
        font-size: 0.12rem;
        font-family: "微软雅黑";
        color: rgb(81, 81, 81);
    }
    .el-form-item{
        text-align: left;
        margin:0.1rem;
    }
    .el-button{
        width: 100%;
        height: 0.88rem;
        margin-top: 0.48rem;
    }
</style>