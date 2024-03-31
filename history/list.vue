<template>
    <!-- <div class="list">
        <el-table :data="products" stripe style="width: 100%">
            <el-table-column prop="title" label="型号" width="180" />
            <el-table-column prop="price" label="价格" width="180" />
            <el-table-column prop="number" label="库存" />
            <el-table-column label="操作"><el-button type="success" @click="addTo">添加到购物车</el-button></el-table-column>
        </el-table>
    </div> -->
    <div class="box">
        <div class="list">
            <div class="grid-header grid-item">序号</div>
            <div class="grid-header grid-item">品牌</div>
            <div class="grid-header grid-item">价格</div>
            <div class="grid-header grid-item">库存</div>
            <div class="grid-header grid-item">操作</div>
            <!-- css调整自动排列方式 ： // 无法交叉循环的解决 -->
            <div class="order grid-item data" v-for="p in products" :key="p.id">{{ p.order }}</div>
            <div class="title grid-item data" v-for="p in products" :key="p.id">{{ p.title }}</div>
            <div class="price grid-item data" v-for="p in products" :key="p.id">{{ p.price }}</div>
            <div class="number grid-item data" v-for="p in products" :key="p.id">{{ p.number }}</div>
            <div class="btn grid-item data" v-for="p in products" :key="p.id">
                <el-button type="success">添加到购物车</el-button>
            </div>
            <!-- test
            <div class="order grid-item data">1</div>
            <div class="title grid-item data">apple</div>
            <div class="price grid-item data">8888</div>
            <div class="number grid-item data">20</div>
            <div class="btn grid-item data"><el-button type="success">添加到购物车</el-button></div> 

            <div class="order grid-item data">2</div>
            <div class="title grid-item data">huawei</div>
            <div class="price grid-item data">8888</div>
            <div class="number grid-item data">20</div>
            <div class="btn grid-item data"><el-button type="success">添加到购物车</el-button></div> 

            <div class="order grid-item data">3</div>
            <div class="title grid-item data">xiaomi</div>
            <div class="price grid-item data">8888</div>
            <div class="number grid-item data">20</div>
            <div class="btn grid-item data"><el-button type="success">添加到购物车</el-button></div>  -->

        </div>
    </div>

</template>

<script setup>
import { onBeforeMount, computed, onMounted, ref, } from 'vue';
import { useStore } from 'vuex'
let products = ref([])
let flag = false
const store = useStore()
// test


const addTo = (p) => store.dispatch('trolleyM/addTo', p)
//为products添加ComputedRefImpl
computed(() => {
    products=store.state.productsM.products
    console.log('cmp', products)
})
// 
// request
onBeforeMount(() => {
    console.log('listVue beforeMounted,', 'products:', products)
    // 利用公共的store进行数据处理;(or use mapping)
    store.dispatch('productsM/get')
    // console.log(store) 已经可以拿到模拟服务器返回的数据  why？
})
onMounted(() => {
    // '模拟后台'传递的数据在此之后
    // but!在组件中正确地使用了响应式数据，就不需要担心组件已经挂载的问题
    console.log('listVue Mounted,', 'products:', products)
})
// onBeforeUpdate(() => {
//     console.log('listVue onBeforeUpdated,', 'products:', products)
// })

// onUpdated(() => {
//     console.log('listVue onUpdated,', 'products:', products)
// })


// 添加'p'到购物车



</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

.box {
    width: 70%;
    background-color: red;
    margin: 0 auto;

    .list {
        display: grid;
        height: 888px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(50, min(50px));
        grid-template-areas:
            "order title price number btn";


        .grid-item {
            justify-items: center;
            align-items: center;
        }

        .grid-header {
            background-color: #f8f9fa;
            font-weight: bold;
            height: 40px;
            // 无法交叉循环的解决
            grid-auto-flow: row;
        }

        .data {
            // 无法交叉循环的解决 
            grid-auto-flow: column
        }

        .order {
            // 无法交叉循环的解决
            grid-column: 1;
        }

        .title {
            // 无法交叉循环的解决
            grid-column: 2;
        }

        .price {
            // 无法交叉循环的解决
            grid-column: 3;
        }

        .number {
            // 无法交叉循环的解决
            grid-column: 4;
        }

        .btn {
            // 无法交叉循环的解决
            grid-column: 5;
        }

    }
}
</style>