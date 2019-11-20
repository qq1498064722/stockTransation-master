<template>
    <div>
<!--头部导航-->
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
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
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="260px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['   1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message iconfont iconshujuguanli" style="font-size: 39px;color:#45c7ff;margin-right: 30px;font-weight:800"></i>
                            <span style="font-size: 21px;color:#333333">数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-2" style="font-size: 19px;color: #808080">活动发布</el-menu-item>
                            <el-menu-item index="1-1" style="font-size: 19px;color: #808080">报名管理</el-menu-item>
                            <el-menu-item index="1-3" style="font-size: 19px;color: #808080">政策入库</el-menu-item>
                            <el-menu-item index="1-4" style="font-size: 19px;color: #808080">会员管理</el-menu-item>
                            <el-menu-item index="1-5" style="font-size: 19px;color: #808080">托管信息</el-menu-item>
                            <el-menu-item index="1-6" style="font-size: 19px;color: #808080">融资信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message iconfont iconxitongguanli" style="font-size: 39px;color:#fff36a;margin-right: 30px;font-weight:800"></i>
                            <span style="font-size: 21px;color:#333333">系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1" style="font-size: 19px;color: #808080">用户管理</el-menu-item>
                            <el-menu-item index="2-2" style="font-size: 19px;color: #808080">字典管理</el-menu-item>
                            <el-menu-item index="2-3" style="font-size: 19px;color: #808080">其它</el-menu-item>
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

        document.documentElement.style.fontSize = rem + 'px';
    };
    export default {
        name: "my-external"
    }
</script>

<style scoped>
        @import "../../assets/font/iconfont.css";
    /*    导航栏*/
    .el-header{
        background-color: rgb(139,155,250);
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0;
        display:flex;
        justify-content: space-between;
    }
    .total{
        width: 260px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgb(227,236,232);
    }
    .total>img{
        width: 50px;
        height: 50px;
    }
    .total>div{
        width: 142px;
        display: -webkit-box;
        -webkit-align-content: center;
        -webkit-line-clamp:2;
        margin: 0;
        font:normal normal normal 19px/60px "Microsoft YaHei UI";
        color: #4391e1;
        line-height: 30px;
        text-align: center;
    }
    .user{
        width: 512px;
        height: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .contont>span{
        font:normal normal normal 19px/60px "Microsoft YaHei UI";
        color: #f7f8fa;
    }
    .contont>i{
        font-size: 31px;
        margin-right: 15px;
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
        width: 55px;
        height: 55px;
        margin-right: 15px;
    }
    .nickname{
        font: normal bold normal 14px "Microsoft YaHei";
        color: #f7f8fa;
        margin-right: 15px;
    }
    .el-dropdown{
        display:flex;
        align-items: center;
    }
    .el-dropdown>i{
        margin-top: 5px;
        font-size: 15px;
        color: #f7f8fa;
    }
    .el-aside{
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    /*body > .el-container {*/
    /*    margin-bottom: 40px;*/
    /*}*/

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>