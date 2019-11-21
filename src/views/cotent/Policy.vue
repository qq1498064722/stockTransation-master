<template>
<div>
    <div class="content">
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
                <div class="icontab">
                    <i class="iconfont iconsousuo"></i>
                </div>
            </div>
            <div class="right">
                <p style="margin-right: 0.18rem"><i class="iconfont iconzengjia"></i> 新增政策</p>
            </div>
        </div>
        <div class="title">
        <div class="conditions">
            <p><i class="iconfont iconshaixuan" style=" background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)), to(rgb(149, 164, 219)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 0.24rem"></i> 筛选条件</p>
            <select name="area" lay-verify="">
                <option value="" disabled>所属领域</option>
                <option value="010">计算机</option>
                <option value="021">农业</option>
                <option value="0571">建筑</option>
            </select>
            <select name="ecopment" lay-verify="">
                <option value="" disabled>贸易类型</option>
                <option value="010">进口</option>
                <option value="021">国内</option>
                <option value="0571">电商</option>
            </select>
            <select name="style" lay-verify="">
                <option value="" disabled>行业</option>
                <option value="010">计算机</option>
                <option value="021">农业</option>
                <option value="0571">建筑</option>
            </select>
                <el-button  @click="handleClick(scope.row)" style="background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(162, 215, 235)),to(rgb(149,164,219)));color: #fff;font-size: 0.16rem;" size="small"> 确定</el-button>
            </div>
        </div>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    max-height="100%">
                <el-table-column
                        prop="PolicyName"
                        label="政策名称"
                        width="400">
                </el-table-column>
                <el-table-column
                        prop="ActivityDate"
                        label="发布时间"
                        width="400"
                        font-size="0.16rem">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="发布人"
                        width="200">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button id="flagtwo" @click="handleClick(scope.row)" type="text" size="small"><i class="iconfont iconchakan"></i> 查看</el-button>
                        <!--<el-button type="text" size="small"><i class="iconfont icontableedit"></i> 编辑</el-button>-->
                    </template>
                </el-table-column>
            </el-table>
    </div>
</div>
</template>

<script>
    export default {
        name: "Policy",
        data(){
            return{
                flag: 1,
                options: [],
                value: [],
                list: [],
                loading: false,
                states: [],
                tableData: [{
                    images:'暂无图片',
                    PolicyName:'国内有效发明专刊年费奖励支持计划',
                    ActivityDate:'2019.10.15-2019.12.15',
                    nickname:'北京卓越电子股份有限公司'
                }]
            }
        },
        methods:{
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
div.content{
    width:100%;
    height: 100%;
    background: #fff;
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
    .select{
        padding-left: 0.12rem;
        display: flex;
    }
    .right{
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
    .search{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.12rem;
    }
    .conditions{
        width: 100%;
        text-align: left;
        border-top: 0.01rem solid #e3e8ec;
        border-bottom: 0.01rem solid #e3e8ec;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .conditions>select{
        width: 2.3rem;
        height: 0.4rem;
    }
    select>option{
        color: rgb(192,196,204);
    }
    .conditions>i{
        margin-left: 0.24rem;
    }
    .title{
        width: 70%;
    }
</style>