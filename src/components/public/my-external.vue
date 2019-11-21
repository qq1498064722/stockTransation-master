<template>
    <div>
<!--头部导航-->
        <el-container>
            <el-header style="text-align: right; font-size: 0.12rem">
                <div class="total">
                    <img src="../../assets/images/stock.png" alt="">
                    <div class="title">
                        太原市股权托管交易中心
                    </div>
                </div>
                <div class="user">
                    <div class="contont">
                        <i class="iconfont iconiconlingdang"></i>
                        <span>通知</span>
                    </div>
                    <div class="contont">
                        <i class="iconfont iconduanxinxiaoxixinxi"></i>
                        <span>消息</span>
                    </div>
                    <div class="users">
                        <div class="photo"></div>
                        <div class="nickname">admin</div>
                        <el-dropdown>
                        <i class="iconfont icontoBottom-fill el-icon-setting"></i>
                        <!--下拉列表-->
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                            <!--下拉结束-->
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
<!-- 头部导航结束-->
    <!--侧边栏开始-->
        </el-container>
        <el-container style="height: 100%; border: 0.01rem solid #eee">
            <el-aside width="2.6rem" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['   1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message iconfont iconshujuguanli" style="font-size: 0.39rem;color:#45c7ff;margin-right: 0.30rem;font-weight:800"></i>
                            <span style="font-size: 0.21rem;color:#333333">数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-2" style="font-size: 0.19rem;color: #808080">活动发布</el-menu-item>
                            <el-menu-item index="1-1" style="font-size: 0.19rem;color: #808080">报名管理</el-menu-item>
                            <el-menu-item index="1-3" style="font-size: 0.19rem;color: #808080">政策入库</el-menu-item>
                            <el-menu-item index="1-4" style="font-size: 0.19rem;color: #808080">会员管理</el-menu-item>
                            <el-menu-item index="1-5" style="font-size: 0.19rem;color: #808080">托管信息</el-menu-item>
                            <el-menu-item index="1-6" style="font-size: 0.19rem;color: #808080">融资信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message iconfont iconxitongguanli" style="font-size: 0.39rem;color:#fff36a;margin-right: 0.3rem;font-weight:800"></i>
                            <span style="font-size: 0.21rem;color:#333333">系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1" style="font-size: 0.19rem;color: #808080">用户管理</el-menu-item>
                            <el-menu-item index="2-2" style="font-size: 0.19rem;color: #808080">字典管理</el-menu-item>
                            <el-menu-item index="2-3" style="font-size: 0.19rem;color: #808080">其它</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
    <!--侧边栏结束-->
</template>

<script>
//获取当前屏幕尺寸并调整相应的大小
    window.onresize = function ()// 绑定到窗口的这个事件中
    {

        let designSize = 1920; // 设计图尺寸

        let html = document.documentElement;

        let wW = html.clientWidth;// 窗口宽度
        let rem = wW * 100 / designSize;

        document.documentElement.style.fontSize = rem + 'rem';
    };
    export default {
        name: "my-external"
    }
</script>

<style scoped>
        @import "../../assets/font/iconfont.css";
        @import"../../assets/css/rem.css";
    /*    导航栏*/
    .el-header{
        background-color: rgb(139,155,250);
        color: #333;
        text-align: center;
        line-height: 0.6rem;
        padding: 0;
        display:flex;
        justify-content: space-between;
    }
    .total{
        width: 2.6rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgb(227,236,232);
    }
    .total>img{
        width: 0.5rem;
        height: 0.5rem;
    }
    .total>div{
        width: 1.42rem;
        display: -webkit-box;
        -webkit-align-content: center;
        -webkit-line-clamp:2;
        margin: 0;
        font:normal normal normal 0.19rem/0.6rem "Microsoft YaHei UI";
        color: #4391e1;
        line-height: 0.3rem;
        text-align: center;
    }
    .user{
        width: 5.12rem;
        height: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .contont>span{
        font:normal normal normal 0.19rem/0.6rem "Microsoft YaHei UI";
        color: #f7f8fa;
    }
    .contont>i{
        font-size: 0.31rem;
        margin-right: 0.15rem;
        color: #f7f8fa;
    }
    .users{
        display:flex;
        justify-content:space-around;
        align-items: center;
    }
    .photo{
        background: #795da3;
        border-radius: 50% 50%;
        width: 0.55rem;
        height: 0.55rem;
        margin-right: 0.15rem;
    }
    .nickname{
        font: normal bold normal 0.14rem "Microsoft YaHei";
        color: #f7f8fa;
        margin-right: 0.15rem;
    }
    .el-dropdown{
        display:flex;
        align-items: center;
    }
    .el-dropdown>i{
        margin-top: 0.5rem;
        font-size: 0.15rem;
        color: #f7f8fa;
    }
    .el-aside{
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 2rem;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 1.6rem;
    }

    /*body > .el-container {*/
    /*    margin-bottom: 40rem;*/
    /*}*/

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 2.6rem;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 3.2rem;
    }
</style>