<template>
    <div class="jump">
        <el-button class="list" :plain="true" @click="open">商品列表</el-button>
        <el-button class="trolley" :plain="true" @click="openVn">购物车</el-button>
        <el-button class="login" :plain="true" @click="login">登录</el-button>
        <el-button class="quit" :plain="true" @click="quit">退出</el-button>
        <!-- 可以将下列部分放在另一个组件中 ;(待续) -->
        <span class="note" v-show="isShow2 === 'greet'">测试开始</span>
        <!-- 主人名字可以动态的：数据源是store的loginCheckM模块中的user信息 ;(待续)-->
        <span class="note" v-show="isShow2 === 'outLine'">已离线</span>
        <span class="note" v-show="isShow2 === 'bye'">测试结束~~</span>
    </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex';
const router = useRouter()
const route = useRoute()
const store =useStore()
let isShow = ref(false)
let isShow2 = ref('outLine')
// const store= useStore()
const open = () => {
    ElMessage('欢迎光临手机商店')
    // 路由导航到list
    router.push('/list')

}

const openVn = () => {
    ElMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, '谨防诈骗,理性消费'),
            h('br', null, null),
            h('i', { style: 'color: teal' }, '请查看您的购物车'),
        ]),
    })
    // 导航到trolley
    router.push({name:'user_trolley',params:{userID:'default'}})//params 只能用于命名路由

}

const login = () => {
    // 先回家
    router.push('/home/login')
    // 
    isShow2.value = 'greet'

}

const quit = () => {
    // 先
    router.push('/home')
    // 
    isShow2.value = 'bye'
    // 修改登录状态
    store.commit('loginCheckM/updateValue',0)
    // 清空账户记录
    store.commit('loginCheckM/updateValue2','default')
    //为say bye+清除数据提供充足时间
    setTimeout(() => {
        isShow2.value = 'outLine'
    }, 1500)
    
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
        left: -250px;
        transition: all 1s;
    }

    .el-button.list:hover {
        color: wheat;
        transition: all 1s;
    }

    .el-button.trolley {
        position: absolute;
        top: 10px;
        left: -150px;
        transition: all 1s;
    }

    .el-button.trolley:hover {
        color: rgb(238, 194, 113);
        transition: all 1s;
    }

    .el-button.login {
        position: absolute;
        top: 10px;
        left: -50px;
        transition: all 1s;
    }

    .el-button.login:hover {
        color: rgb(233, 166, 42);
        transition: all 1s;
    }

    .el-button.quit {
        position: absolute;
        top: 10px;
        left: 40px;
        transition: all 1s;
    }

    .el-button.quit:hover {
        color: rgb(238, 14, 14);
        transition: all 1s;
    }

    .note {
        position: absolute;
        top: 15px;
        right: -150px;
    }



}
</style>
