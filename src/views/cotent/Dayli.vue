<template>
    <!--日报管理-->
    <div>
        <p style="text-align: left;margin-left: 0.19rem">
            <span>
                系统管理 >
            </span>
            <span style="color: rgb(65,89,254)"> 其他</span>
        </p>
        <div class="dayli">
        <ul class="list">
            <li class="title">
            <p style="margin-left: 0.18rem">·日志管理</p>
                <div class="title-right">
                    <p style="margin-right: 0.18rem"><i class="iconfont iconzengjia"></i> 新增日志</p>
                </div>
            </li>
            <li class="item">
                <img src="../../assets/message.png" alt="">
                <span style="color:#e3e8ec">A管理员</span>
                <p style="color:#333333">国内有效发明专利年费奖励支持计划，为提高知识产权创造的有效性、提高发明质量、予以资助</p>
                <p style="color:#e3e8ec">2019.11.20</p>
                <i class="iconfont iconshanchu1"></i>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Activity"
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1514798_d8fz58wwux7.css";
    @import"../../assets/css/rem.css";
    .dayli{
    background:#fff;
    }
    .title{
        display:flex;
        justify-content: space-between;
    }
    .title-right{
        display:flex;
        justify-content: space-around;
        width: 1.4rem;
    }
    .title>p{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .title-right>p,.title-right>i{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .item{
        width: 100%;
        height: 1.02rem;
        border: 0.01rem solid #e3e8ec;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.34rem;
    }
    .item>img{
        width: 0.66rem;
        height: 0.66rem;
    }
    .item>i{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(253,202,138)), to(rgb(240,132,125)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 0.32rem;
    }
</style>