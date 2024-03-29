import { getProducts } from '../../../product'

const state = {
    products: []
}
const mutations = {
    // 注入产品信息
    set(state, products) {
        state.products = products
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
    },
    // 恢复商品信息后删除没有库存的产品
    update2(state) {
        state.products = state.products.filter(p => p.number > 0)
    }

}
const actions = {
    // 获取货源信息是异步的
    get: async (ctx) => {
        const res = getProducts()// await
        ctx.commit('set', res)
    }
}
const getters = {
    // update后调用
    // 还剩多少台手机
    restNum: (state) => {
        return state.products.reduce((a, p) => {
            return a + p.number
        }, 0)
    }
}

//option
const productsModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default productsModule
