<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">系统管理</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/" style="color: #2b4bff;font-size: 14px">字典管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="add">
            <ul class="addTitle">
                <li class="itemTitle">
                    <span>企业管理</span>
                    <div class="datamanage">

                    </div>
                </li>
                <li class="itemTitle"></li>
                <li class="itemTitle"></li>
                <li class="itemTitle"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DictoryMangement",
    }
</script>

<style scoped>
.add {
    width: 1590px;
    height: 369px;
}
    .itemTitle{
        display:flex;
        justify-content: space-around;
    }
</style>
