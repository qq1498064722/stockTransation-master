<template>
    <!--活动发布-->
    <div>
        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0.24rem 0;">
            <el-breadcrumb-item :to="{ path: '/' }" style="margin-left: 0.12rem">数据管理</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: rgb(59,86,252)">活动发布</span></el-breadcrumb-item>
        </el-breadcrumb>
        <!--        内容标题-->
        <div class="content-title">
            <div :class="[flag==1?'activeStar':'activeEnd']" @click="contenttitle(1)">
                <div class="iconbox"><i class="iconfont iconjinhangzhong" :class="[flag==1?'iconselect':'iconnone']"></i></div>
                <span>未结束活动</span>
            </div>
            <div :class="[flag==2?'activeStar':'activeEnd']" @click="contenttitle(2)">
                <div class="iconbox"><i class="iconfont iconwancheng" :class="[flag==2?'iconselect':'iconnone']"></i></div>
                <span>已结束活动</span>
            </div>
        </div>
        <!--       内容正文-->
        <!--        未结束-->
        <div class="content" v-show="flag == 1">
            <div class="search">
                <div class="select">
                    <el-select
                            v-model="value"
                            multiple
                            filterable
                            remote
                            reserve-keyword
                            placeholder="请输入活动名称"
                            :remote-method="remoteMethod"
                            :loading="loading" style="">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="icontab" style="height: 0.55rem;">
                        <i class="iconfont iconsousuo" style="line-height: 0.5rem;"></i>
                    </div>
                </div>
                <div class="right">
                    <p style="margin-right: 0.18rem"><i class="iconfont iconzengjia"></i> 发布活动</p>
                </div>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    max-height="100%">
                <el-table-column
                        fixed
                        prop="images"
                        label=""
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="ActivityName"
                        label="活动名称"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="ActivityDate"
                        label="报名起止日期"
                        width="230"
                        font-size="0.16rem">
                </el-table-column>
                <el-table-column
                        prop="RegistrationDate"
                        label="报名企业人数"
                        width="230">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="发起企业（人）"
                        width="200">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="iconfont iconchakan"></i> 查看</el-button>
                        <el-button type="text" size="small"><i class="iconfont icontableedit"></i> 编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--        已结束-->
        <div class="content" v-show="flag == 2">
            <div class="search">
                <div class="select">
                    <el-select
                            v-model="value"
                            multiple
                            filterable
                            remote
                            reserve-keyword
                            placeholder="请输入活动名称"
                            :remote-method="remoteMethod"
                            :loading="loading" style="">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="icontab" style="height: 0.55rem;">
                        <i class="iconfont iconsousuo" style="line-height: 0.5rem;"></i>
                    </div>
                </div>
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    max-height="100%">
                <el-table-column
                        fixed
                        prop="images"
                        label=""
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="ActivityName"
                        label="活动名称"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="ActivityDate"
                        label="报名起止日期"
                        width="230"
                        font-size="0.16rem">
                </el-table-column>
                <el-table-column
                        prop="RegistrationDate"
                        label="报名企业人数"
                        width="230">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="发起企业（人）"
                        width="200">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="150">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small"><i class="iconfont iconchakan"></i> 查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "asd",
        data() {
            return {
                flag: 1,
                options: [],
                value: [],
                list: [],
                loading: false,
                states: [],
                tableData: [{
                    images:'暂无图片',
                    ActivityName:'国内有效发明专刊年费奖励支持计划',
                    ActivityDate:'2019.10.15-2019.12.15',
                    RegistrationDate:'2019.10.15-2019.11.15',
                    nickname:'北京卓越电子股份有限公司'
                }]
            }

        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
        methods:{
            contenttitle(index){
                index && index === 1?this.flag = 1 : this.flag = 2;
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 150);
                } else {
                    this.options = [];
                }
            }
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1514798_bf82tmbbkrt.css";
    @import"../../assets/css/rem.css";
    .content-title{
        width: 100%;
        height: 0.6rem;
        display: flex;
    }
    .activeStar{
        width: 50%;
        height: 100%;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.2rem;
        background: linear-gradient(-89deg,#214ac0 0%,#53bedd 100%);
    }
    .activeEnd{
        width: 50%;
        height: 100%;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.2rem;
        background: rgb(226,234,255);
    }
    .iconbox{
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background-color: #fff;
        border-radius: 50%;
        line-height: 0.24rem;
        font-size: 0.14rem;
        margin-right: 0.20rem;
    }
    .iconbox>.iconselect{
        background: linear-gradient(-89deg,#214ac0 0%,#53bedd 100%);
        -webkit-background-clip: text;
        color: transparent;
    }
    .iconbox>.iconnone{
        color: rgb(226,234,255);
    }
    .content{
        width: 100%;
        padding-top: 0.24rem;
        background:#fff;
    }
    .search{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .select{
        padding-left: 0.12rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icontab{
        width: 0.81rem;
        height: 0.39rem;
        background: rgb(45,132,211);
        color: #fff;
        text-align: center;
        line-height: 0.39rem;
        border-radius: 5%;
    }
    .icontab>i{
        font-size: 0.30rem;
    }
    .right{
        margin: 0;
        font-size: 0.18rem;
    }
    .right>p{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .right>i{
        background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .el-button{
        width: 40%;
    }
    .flagtwo{
        width: 100%;
    }
    .search1{
        padding:0.10rem 0;
    }
</style>