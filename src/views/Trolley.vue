<template>
  <el-table :data="wantP" style="width: 100%">
    <el-table-column prop="title" label="型号" width="180" />
    <el-table-column prop="price" label="价格" width="180" />
    <el-table-column prop="count" label="数量" />
  </el-table>
  <div class="buy"><button>清空购物车</button></div>
  <div class="finish">尊敬的“{{ userName }}”用户：您需要支付：￥{{ totalPrice }}</div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const route=useRoute()
let userName = ref('default')
let totalPrice = ref(0)
let wantP = ref([])//购物车数据

// 
watchEffect(() => {
  // userName.value=route.query.userID as string//ts 类型断言
  userName.value=store.getters['loginCheckM/getterValue2']
  wantP.value = store.getters['trolleyM/_wantP']
  totalPrice.value = store.getters['trolleyM/TotalPrice']
})

// test
const wantP2 = [
  {
    count: 1,
    id: 2,
    title: 'apple1',
    price: 8881,
  },
  {
    count: 2,
    id: 6,
    title: 'apple2',
    price: 8882,
  },
  {
    count: 1,
    id: 7,
    title: 'apple3',
    price: 8883,
  }
]
</script>
