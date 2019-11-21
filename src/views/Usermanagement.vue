<template>
    <div class="userman">
        <!--面包屑开始-->
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item class="active">用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--面包屑结束-->

        <!--内容部分开始-->
        <div class="content">
            <!--内容部分的标题开始-->
            <div class="content-title">
                <div :class="[flag==1?'con-tit-selection':'con-tit-unchecked']" @click="contenttitle(1)" >
                    <div class="iconbox"><i class="iconfont iconqiyeyonghuguanli" :class="[flag==1?'iconactive':'iconactiveno']"></i></div>
                    <span>企业</span>
                </div>
                <div :class="[flag==2?'con-tit-selection':'con-tit-unchecked']"  @click="contenttitle(2)">
                    <div class="iconbox"><i class="iconfont iconzaixianquhao" :class="[flag==2?'iconactive':'iconactiveno']"></i></div>
                    <span>个人</span>
                    </div>
            </div>
            <!--内容部分的标题结束-->

            <!--内容部分的表格开始-->
            <!--企业表格开始-->
            <div class="content-table-box" v-show="flag==1" >
                <div class="ctb-form">
                    <el-form ref="form" :inline="true">
                        <div class="reg-con-item">
                            <el-input value="" placeholder="请输入企业名称"></el-input>
                            <el-button type="primary"><i style="font-size: 16px" class="iconfont iconsousuo"></i>
                            </el-button>

                        </div>
                    </el-form>
                </div>
                <!--表格开始-->
                <div class="ctb-table">
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                label="企业名称"
                        >
                        </el-table-column>

                        <el-table-column
                                prop="tel"
                                label="手机号码">
                        </el-table-column>
                        <el-table-column
                                label="会员等级">
                            <div class="vipimg">
                                <img src="../assets/images/vip.png" alt="">
                                <img src="../assets/images/vip.png" alt="">
                                <img src="../assets/images/vip.png" alt="">
                            </div>
                        </el-table-column>
                        <el-table-column
                                prop="num"
                                label="打卡次数">
                        </el-table-column>
                        <el-table-column
                                prop="createtime"
                                label="注册时间">
                        </el-table-column>
                        <el-table-column
                                label="操作">
                            <div class="caozuo">
                                <div class="query">
                                    <img src="../assets/images/query.png" alt="">
                                    <span>查看</span>
                                </div>
                                <div class="edit">
                                    <img src="../assets/images/edit.png" alt="">
                                    <span>编辑</span>
                                </div>
                            </div>
                        </el-table-column>
                    </el-table>
                </div>
                <!--表格结束-->

                <!--分页开始-->
                <div class="page"></div>
                <!--分布结束-->

            </div>

            <!--企业表格结束-->

            <!--个人表格开始-->
            <div class="content-table-box" v-show="flag==2">
                <div class="ctb-form">
                    <el-form ref="form" :inline="true">
                        <div class="reg-con-item">
                            <el-input value="" placeholder="请输入关键字"></el-input>
                            <el-button type="primary"><i style="font-size: 16px" class="iconfont iconsousuo"></i>
                            </el-button>

                        </div>
                    </el-form>
                </div>
                <!--表格开始-->
                <div class="ctb-table">
                    <el-table
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                label="姓名"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="cardid"
                                label="身份证号"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="tel"
                                label="手机号码">
                        </el-table-column>
                        <el-table-column
                                label="会员等级">
                            <div class="vipimg">
                                <img src="../assets/images/vip.png" alt="">
                                <img src="../assets/images/vip.png" alt="">
                                <img src="../assets/images/vip.png" alt="">
                            </div>
                        </el-table-column>
                        <el-table-column
                                prop="num"
                                label="打卡次数">
                        </el-table-column>
                        <el-table-column
                                prop="createtime"
                                label="注册时间">
                        </el-table-column>
                        <el-table-column
                                label="操作">
                            <div class="caozuo">
                                <div class="query">
                                    <img src="../assets/images/query.png" alt="">
                                    <span>查看</span>
                                </div>
                                <div class="edit">
                                    <img src="../assets/images/edit.png" alt="">
                                    <span>编辑</span>
                                </div>
                            </div>
                        </el-table-column>
                    </el-table>
                </div>
                <!--表格结束-->

                <!--分页开始-->
                <div class="page"></div>
                <!--分布结束-->

            </div>

            <!--个人表格结束-->

            <!--内容部分的表格结束-->


        </div>
        <!--内容部分结束-->


    </div>
</template>

<script>

    export default {
        name: "Usermanagement",
        data() {
            return {
                tableData: [{
                    name: '安木四者1',
                    cardid: '14013123123123',
                    tel: '13123131231',
                    vip: 'vipvip',
                    num: 10,
                    createtime: '2019.10.19',
                    operation: '查看，编辑'
                },
                    {
                        name: '安木四者2',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者3',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者4',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者5',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者6',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者7',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者8',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者9',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者10',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者11',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者12',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                    {
                        name: '安木四者13',
                        cardid: '14013123123123',
                        tel: '13123131231',
                        vip: 'vipvip',
                        num: 10,
                        createtime: '2019.10.19',
                        operation: '查看，编辑'
                    },
                ],
                flag:1
            }
        },
        methods:{
            contenttitle(index){
                index && index === 1?this.flag=1:this.flag=2;

            }
        }
    }
</script>
<style>
    body {
        background-color: #e3e8ec;
    }


    .userman {
        width: 100%;
        height: 100%;
        margin: 0.3rem;
    }

    .userman .el-input__inner, .el-input {
        width: 3.3rem;
        height: 0.44rem;
        border-radius: 0;

    }
    .userman .active > span {
        color: #2d4bff !important;
        font-size: 0.19rem;

    }
    .el-button {
        width: 0.56rem;
        height: 0.44rem;
    }
    .userman .reg-con-item{
        height: 0.44rem;
        display: flex;
    }
    .userman .el-table__row{
        height: 0.45rem;
        line-height: 0.45rem;
    }
    .userman .el-table__row >td{
        padding: 0;
    }
    .userman .el-input__inner {
        padding-left: 0.3rem;
        color: #999;
        font-size: 0.16rem;
        line-height: 0.45rem;
        letter-spacing: 0.03rem;
    }

    .userman .el-button {
        border-radius: 0;
        background-color: #2d84d3;
        padding: 0;
    }
    .userman .el-breadcrumb__inner{
        font-size: 0.19rem;
        color: #333;
    }
    .userman .el-table--striped .el-table__body tr.el-table__row--striped td {
        background-color: #f7fbff;

    }

    .el-table__header > thead > tr > th > div,
    .el-table__body > tbody > tr > td {
        text-align: center;

    }
    .el-table__header > thead > tr > th > div{
        color: rgba(51,51,51,0.6);
        font-size: 0.19rem;
    }
    .el-table__body > tbody > tr > td{
        color: #333;
        font-size: 0.16rem;
    }

    .has-gutter tr th {
        background-color: #e1effa;

    }

</style>
<style scoped>
    /*面包屑开始*/
    .breadcrumb {
        margin-bottom: 0.2rem;
    }

    /*面包屑结束*/
    .content {
        width: 16rem;
        height: 8.9rem;
        background-color: #fff;
    }
    .iconbox{
        display: inline-block;
        width:0.24rem;
        height:0.24rem;
        background-color:#fff;
        border-radius: 50%;
        line-height: 0.24rem;
        font-size: 0.14rem ;
        margin-right: 0.2rem;

    }
    .iconbox >.iconactive {
        background: linear-gradient(-89deg,#214ac0 0%,#53bedd 100%);
        -webkit-background-clip: text;
        color: transparent;
    }
    .iconbox >.iconactiveno {
        color: #e2eaff;

    }
    .content-title {
        width: 100%;
        height: 0.6rem;
        display: flex;
        margin-bottom: 0.27rem;
    }
    .con-tit-unchecked>img,.con-tit-selection>img{
        vertical-align:middle;
        margin-right: 0.1rem;
    }

    .con-tit-unchecked, .con-tit-selection {
        width: 50%;
        height: 100%;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.2rem;
    }

    .con-tit-unchecked{
        background-color: #e2eaff;
        color: #999;

    }

    .con-tit-selection {
        background-image: linear-gradient(89deg,
        #53bedd 2%,
        #214ac0 100%),
        linear-gradient(
                #e2eaff,
                #e2eaff);
        color: #fff;

    }

    .content-table-box {
        padding: 0 0.3rem;
        box-sizing: border-box;
    }

    .ctb-form {
        width: 100%;
        height: 0.44rem;
        margin-bottom: 0.25rem;
    }

    .ctb-table > .el-table {
        border: solid 0.01rem #d7d9ef;
    }
    .vipimg {
        width: 1.06rem;
        height: 0.21rem;
        margin: 0 auto;
    }
    .vipimg>img {
        width: 0.26rem;
        height: 0.21rem;
    }
    .vipimg>img:not(:last-child){
        margin-right: 0.14rem;
    }
    .edit>img
    {
        width: 0.18rem;
        height: 0.18rem;
        margin-right: 0.06rem;
        vertical-align:middle
    }
    .query>img{
        width: 0.20rem;
        height: 0.16rem;
        margin-right: 0.06rem;
        vertical-align:middle
    }

    .query{
        margin-right: 0.34rem;

    }
    .caozuo{
        margin: 0 auto;
        display: inline-flex;
    }
    .ctb-table{
        margin-bottom: 0.38rem;
    }

</style>