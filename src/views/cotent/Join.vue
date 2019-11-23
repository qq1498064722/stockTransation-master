<template>
    <!--报名管理-->
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0.24rem 0;">
            <el-breadcrumb-item :to="{ path: '/' }" style="margin-left: 0.24rem">数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>报名管理</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: rgb(59,86,252)">国内有效发明专利年费奖励支持计报名</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="list">
        <ul style="margin-bottom: 0.24rem;">
            <li class="title">
                <p style="margin-left: 0.18rem;font-size: 0.22rem;margin-bottom: 0.18rem;margin-top: 0.18rem">·《国内有效发明专利年费奖励支持计》企业报名（2019.10.15--2019.12.15）</p>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
            <li class="item">
                <div class="itemtitle">
                    <el-checkbox style="margin-left: 0.24rem;">
                    <i class="iconfont iconweb-icon-" style="font-size: 0.4rem;margin: 0 0.12rem;color: rgb(64,158,255)"></i>
                    <span>北京卓越信通电子股份有限公司</span>
                    </el-checkbox>
                </div>
                <div class="datetime">
                    <span style="color: rgb(116,116,116);margin-right: 0.24rem">2019.11.30</span>
                </div>
            </li>
        </ul>
            <div class="block">
                <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
        <div class="buttonx">
            <el-button type="primary" style="width: 150px">导出</el-button>
            <el-button type="primary" style="width: 150px">打印</el-button>
        </div>
        <div class="all">
            <el-checkbox style="color: rgb(229,222,57)">
                全选
            </el-checkbox>
        </div>
    </div>
</template>

<script>
    export default {
        name: "join"
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1514798_d8fz58wwux7.css";
    @import"../../assets/css/rem.css";
    .list{
        background:#fff;
    }
    .title{
        display:flex;
        justify-content: space-between;
    }
    .title>p{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .item{
        width: 99%;
        height: 0.9rem;
        border: 1px solid #e3e8ec;
        display: flex;
        margin-left: 0.12rem;
        margin-bottom: 0.12rem;
        justify-content: space-between;
        align-items: center;
    }
    .itemtitle>i{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162,215,235)), to(rgb(149,164,219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .itemtitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .block{
        margin-top: 0.24rem;
    }
    .buttonx{
        float:right;
        margin-right: 0.48rem;
        margin: 0.24rem;
    }
    .all{
        float: left ;
        margin-left: 0.48rem;
        margin: 0.24rem;
    }
</style>