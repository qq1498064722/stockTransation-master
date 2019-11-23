<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0.24rem 0;">
            <el-breadcrumb-item :to="{ path: '/' }" style="margin-left: 0.24rem">数据管理</el-breadcrumb-item>
            <el-breadcrumb-item style="margin-left: 0.24rem">托管信息</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: rgb(59,86,252)">新增问卷</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="list">
            <div class="title">
                <p style="margin-left: 0.18rem">· 问卷、调查信息设置</p>
            </div>
            <div class="item">
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1514798_1k45rgd26ao.css";
    @import"../../assets/css/rem.css";
    .list{
        width: 100%;
        background:#fff;
    }
    .title{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .title>p{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .item{
        margin-top: 0.12rem;
        margin-left: 0.4rem;
        border: 1px solid red;
    }
</style>