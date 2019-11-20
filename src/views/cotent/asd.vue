<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 30px 0;">
            <el-breadcrumb-item :to="{ path: '/' }">数据管理</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: rgb(59,86,252)">活动发布</span></el-breadcrumb-item>
        </el-breadcrumb>
    <div class="activeityTitle">
        <div class="left" v-for="(item,index) in title" v-bind:class="{active:index == num}" @click="tab(index)">{{item}}</div>
    </div>
        <div class="activeityContent">
        <div v-for="(content,index) in tabmain" v-show="index == num">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "asd",
        data(){
            return{
            title:['未结束活动','已结束活动'],
            tabmain:['未结束活动内容','结束活动内容'],
            num:0
            }
        },
        methods:{
            tab(index){
                this.num = index
            }
        }
    }
</script>

<style scoped>
.activeityTitle{
    width: 100%;
    padding:0 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.activeityContent{
    width: 100%;
    padding:0 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
    .left{
        width: 800px;
        height: 60px;
        border:1px solid #f7f8fa;
        line-height: 60px;
        background-color: rgb(226,234,255);
        color: rgb(171,171,171);
    }
</style>