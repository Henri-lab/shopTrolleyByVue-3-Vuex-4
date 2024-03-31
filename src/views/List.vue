<template>
    <div class="list">
    <el-table :data="products" style="width: 100%;height:100%" class="list">
        <el-table-column fixed type="index" label="序号" width="180" />
        <el-table-column prop="title" label="品牌" width="180" />
        <el-table-column prop="price" label="价格" width="180" />
        <el-table-column prop="number" label="库存" width="180" />
        <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
                <!-- 自定义列模板 -->
                <!-- row：数据元素对象 -->
                <el-button link type="success" size="small" @click="addTo(scope.row)">添加购物车</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watchEffect, } from 'vue';
import { useStore } from 'vuex'
let products = ref([])
// let flag = false
const store = useStore()
// test
// products = [
//     {
//         id: 0,
//         title: "iphone 14",
//         price: 5000,
//         number: 10, //表示库存
//     },
//     {
//         id: 1,
//         title: "xiaomi 13",
//         price: 3000,
//         number: 20, //表示库存
//     },
//     {
//         id: 2,
//         title: "huawei mate10",
//         price: 4000,
//         number: 8, //表示库存
//     },
//     {
//         id: 3,
//         title: "iPhone 12",
//         price: 6999,
//         number: 20
//     },
//     {
//         id: 4,
//         title: "Samsung Galaxy S21",
//         price: 7999,
//         number: 15
//     },
//     {
//         id: 5,
//         title: "Google Pixel 6",
//         price: 8999,
//         number: 12
//     },
//     {
//         id: 6,
//         title: "MacBook Pro M1",
//         price: 12999,
//         number: 8
//     },
//     {
//         id: 7,
//         title: "Sony PlayStation 5",
//         price: 4999,
//         number: 4
//     },
//     {
//         id: 8,
//         title: "Nintendo Switch",
//         price: 2999,
//         number: 10
//     },
//     {
//         id: 9,
//         title: "Fitbit Charge 4",
//         price: 899,
//         number: 25
//     },
// ]

// 添加'p'到购物车
const addTo = (p) => {
    store.dispatch('trolleyM/addTo', p)
    console.log("已添加至购物车的产品和数量:",store.state.trolleyM.wantP)
}

//为products添加ComputedRefImpl
watchEffect(() => {
    products.value = store.state.productsM.products
    console.log('cmp', products)
})
// 
// request
onBeforeMount(() => {
    console.log('listVue beforeMounted,', 'products:', products)
    store.dispatch('productsM/get')
})

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.list{
    width: 70%;
    margin-left: 150px;
    height: 1500px;
}
</style>