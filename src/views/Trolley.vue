<template>
  <div class="box">
    <el-table :data="wantP" style="width: 100%" class="list">
      <el-table-column fixed type="index" label="序号" width="180" />
      <el-table-column prop="title" label="品牌" width="180" />
      <el-table-column prop="price" label="价格" width="180" />
      <el-table-column prop="count" label="数量" width="180" />
      <el-table-column fixed="right" label="删除" width="200">
        <template #default="scope">
          <el-button link type="success" size="small" @click="del(scope.row)">💀</el-button>
        </template>
      </el-table-column>
    </el-table>
    <span class="finish">尊敬的“{{ userName }}”用户：您需要支付：￥{{ totalPrice }}<br></span>
    <span class="buy" @click="buy"><el-button type="success">结算</el-button></span>
    <div class="buyRes" v-show="status==='fail'">结算失败</div>
    <div class="buyRes" v-show="status==='success'">结算成功</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const route = useRoute()
let userName = ref('default')
let totalPrice = ref(0)
let wantP = ref([])//购物车数据
const status = ref('')

// 
watchEffect(() => {
  // userName.value=route.query.userID as string//ts 类型断言
  userName.value = store.getters['loginCheckM/getterValue2']
  wantP.value = store.state.trolleyM.wantP
  totalPrice.value = store.getters['trolleyM/TotalPrice']
})

//删除购物车上的产品
const del = (p) => {
  console.log('delete')
  store.commit('trolleyM/del', p.id)
}
// 结算
const buy = () => {
  console.log('结算前状态：',store.state.trolleyM.status1)
  store.dispatch('trolleyM/buy')
  //  结算成败
  console.log('结算后状态：',store.state.trolleyM.status1)
  status.value = store.state.trolleyM.status1
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  width: 70%;
  margin-left: 150px;
}
</style>
