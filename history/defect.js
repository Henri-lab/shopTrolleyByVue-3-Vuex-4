// #list.vue

// 容器：产品的信息
const products = []
// 产品数量；？写死
const count = 50
onMounted = async () => {
    // 请求产品数据
    try {
        products = await product.getProducts()
        console.log('products:', products)
    } catch (error) {
        console.error('getProducts failed', error)
    }
    // 数据没有请求完毕
    if (products.length <= count) {
        alert('loading')
    } else {
        //请求完毕后立刻在store中备份一份，方便为购物车页面提供状态
        const store = useStore()
        store.commit('copy', products)
    }
}

// #store 
import { createStore } from 'vuex'
// 直接导入在其他文件创建的router；也可以用import { useRouter } from 'vue-router'的方法创建
import router from '/router'
const store = createStore({
    state() {
        return {
            // 商品数据(copyFromListVue)
            products: [],
            // 购物车数据
            trolley: []
        }
    },
    mutations: {
        copy(state, products) {
            state.products = products
        },
        // 修改购物车数据
        add(state, product) {
            state.trolley.push(product);
        },
        delete(state, index) {
            state.trolley.splice(index, 1);
        },
    },
    actions: {
        async navigateToRoute(ctx, path) {
            await router.push(path);
        }
    },
    getters: {

    }
})