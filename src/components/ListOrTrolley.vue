<template>
    <div class="jump">
        <el-button class="list" :plain="true" @click="open">商品列表</el-button>
        <el-button class="trolley" :plain="true" @click="openVn">购物车</el-button>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'
import useStore from 'vuex'

const open = () => {
    ElMessage('This is a message.')
    // 路由导航到list
    // const store= useStore()


}

const openVn = () => {
    ElMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    })
}
</script>

<style lang="scss" scoped>
.jump {
    position: relative;
    width: 250px;
    height: 50px;
    margin: 0 auto;
    .el-button.list {
        position: absolute;
        top: 10px;
        transition: all 1s;
    }
    .el-button.list:hover {
       color: wheat;
       transition: all 1s;
    }

    .el-button.trolley {
        position: absolute;
        top: 10px;
        right: 0;
        transition: all 1s;
    }
      .el-button.trolley:hover {
       color: wheat;
       transition: all 1s;
    }
}
</style>
