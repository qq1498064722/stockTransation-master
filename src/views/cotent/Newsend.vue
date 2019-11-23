<template>
    <!--新增发布-->



    <div>
        <!--融资信息发布-->
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 0.24rem 0;">
            <el-breadcrumb-item :to="{ path: '/' }" style="margin-left: 0.24rem">数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>融资信息</el-breadcrumb-item>
            <el-breadcrumb-item><span style="color: rgb(59,86,252)">新增发布</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
        <div class="toptitle">
            <span style=" background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
                          -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent;">· 融资产品</span>
            <span><i class="iconfont icontableedit" style=" background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(254,237,157)), to(rgb(249,181,134)));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-right: 0.12rem"></i>编辑</span>
        </div>
            <div class="item">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div>
                <el-form-item label="产品名称">
                    <el-input placeholder="国内有效发明专利年费奖励支持计划"></el-input>
                </el-form-item>
                <el-form-item label="发起企业（人 ）">
                    <el-input placeholder="北京卓越信通电子股份有限公司"></el-input>
                </el-form-item>
                </div>
            </el-form>
                <div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                        <el-form-item label="产品内容梗概" style="margin-left: -4%;">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="toptitle">
            <span style=" background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
                          -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent;">· 融资产品</span>
            </div>
        <el-table
                :data="tableData"
                style="width: 100%"
                max-height="100%">
            <el-table-column
                    prop="ActivityName"
                    label="企业名称"
                    width="550">
            </el-table-column>
            <el-table-column
                    prop="ActivityDate"
                    label="申请日期"
                    width="300"
                    font-size="0.16rem">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="300">
                <template slot-scope="scope">
                    <el-button id="flagtwo" @click="handleClick(scope.row)" type="text" size="small"><i class="iconfont iconchakan"></i> 查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        </div>
        </div>
</template>

<script>
    export default {
        name: "newsend",
        data(){
            return{
                options: [],
                value: [],
                list: [],
                loading: false,
                states: [],
                tableData: [{
                    ActivityName:'北京卓越信通电子股份有限公司',
                    ActivityDate:'2019.10.19',
                },
                    {
                        ActivityName:'北京卓越信通电子股份有限公司',
                        ActivityDate:'2019.10.19',
                    },
                    {
                        ActivityName:'北京卓越信通电子股份有限公司',
                        ActivityDate:'2019.10.19',
                    },
                    {
                        ActivityName:'北京卓越信通电子股份有限公司',
                        ActivityDate:'2019.10.19',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    @import "https://at.alicdn.com/t/font_1514798_bf82tmbbkrt.css";
    @import"../../assets/css/rem.css";
    .content{
        background: #fff;
        margin-bottom: 0.24rem;
    }
    .toptitle{
        padding: 0 0.24rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item{
        padding: 0.24rem;
        display: flex;
        flex-flow: column;
        align-items: self-start;
    }
</style>