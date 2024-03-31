
import { getProducts } from '../../../product'

const state ={
    products: []//默认为响应式
}
const mutations = {
    // 注入产品信息
    set(state, products) {
        state.products = products
        console.log('将获得的数据存入store,', 'set')
        console.log('ModuleOneStore_state_products:', products)
    },
    // 接受一个管理购物车的store的wp对象{ id,count }
    update(state, { id, count }) {
        // 先更新指定产品的数量信息更新数量
        const updated = state.products.find(p => p.id === id)
        updated.number -= updated.number - count
        // 手机没库存会number为非负
        // 更新view
        // 库存为0先不删：因为我要从购物车storeM中利用库存storeM恢复商品的原始信息，很有可能这个商品在购物车时但库存为0；
        state.products = state.products.filter(p => p.number >= 0)
        console.log('update')
    },
    // 恢复商品信息后删除没有库存的产品
    update2(state) {
        state.products = state.products.filter(p => p.number > 0)
        console.log('update2')
    }


}
const actions = {
    // 获取货源信息是异步的
    get: async (ctx) => {
        // await;return Promise//like:axios.get(url)
        getProducts().then(res => {
            console.log('从模拟服务器获得数据,', 'get=>res:', res)
            ctx.commit('set', res)
        }).catch(error => {
            console.error(error);
        });

    }
}
const getters = {
    // update后调用
    // 还剩多少台手机
    restNum: (state) => {
        console.log('restNum')
        return state.products.reduce((a, p) => {
            return a + p.number
        }, 0)
    },
    // no need
    getStoreProducts(state){
        return state.products
    }
}

//option
const productsM = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default productsM
