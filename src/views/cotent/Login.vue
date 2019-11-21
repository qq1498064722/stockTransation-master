<template>
    <div>
        <div class="bg">
        </div>
        <el-card class="box-card">
            <el-form :label-position="labelPosition" label-width="0.8rem" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input type="text" placeholder="请输入账号" v-model="input"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
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
            return{
                labelPosition:'top',
                input:'',
                password:''
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
        width: 4.8rem;
        height: 3.2rem;
    }
    .bg{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-image: url("../../assets/images/backg.png");
    }
    footer{
        position: absolute;
        bottom: 0.1rem;
        margin-left: calc(50% - 1.54rem);
        font-size: 0.12rem;
        font-family: "微软雅黑";
        color: rgb(81, 81, 81);
    }
    .el-form-item{
        text-align: left;
        margin:0.05rem;
    }
    .el-button{
        width: 100%;
        height: 0.44rem;
        margin-top: 0.24rem;
    }
</style>