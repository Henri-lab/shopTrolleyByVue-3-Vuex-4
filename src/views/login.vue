<template>
    <div class="loginForm">
        <el-input v-model="userName" style="width: 240px" placeholder="账户名称" clearable />
        <br><br>
        <el-input v-model="password" style="width: 240px" type="password" placeholder="输入密码" show-password />
        <br>
        <el-button class="confirm" type="info" @click="confirm">确定</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const userName = ref('')
const password = ref('')
const confirm = () => {
    // 确认登录后，会进入用户的购物车
    // 首先获得用户的名字,并传递给要去的路由;(待续：为每一个用户建立为一个唯一的id)
    router.push({ name: 'user_trolley', params: { userID: userName.value } })
}
</script>

<style scoped>
.loginForm {
    width: 40%;
    height: 100px;
    margin: 0 auto;
    margin-top: -280px;
    position: relative;

}

.el-input {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

.confirm {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
}


/* 备用动画 */
@-moz-keyframes bounce {
    0% {
        opacity: 0;
        scale: 0
    }

    50% {
        opacity: 1;
        scale: 1;
    }

    100% {
        opacity: 1;
        scale: 1.5;
    }
}
</style>