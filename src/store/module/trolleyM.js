import { buyProducts } from '../../../product'


const state = {
    // 添加在购物车的产品
    // 由于只是添加并不需要展示购物车页面，所以记录简化为{id，count}
    wantP: [],
    // 交易状态
    deal: null,
    // 信息完善状态
    // flag: false
}


const mutations = {
    // 展示视图时要用
    setWantP(state, new_wantP) {
        state.wantP = new_wantP
    },
    setDeal(state, newStatus) {
        state.deal = newStatus
    },
    // 添加至购物车时用
    addFirst(state, { id }) {
        state.wantP.push({
            id,
            count: 1
        })
    },
    // 再添加一次
    addAgain(state, { id }) {
        state.wantP.find(wp => wp.id === id).count++
    },
    // 删除购物车指定产品
    del(state, { id }) {
        state.wantP.find(wp => wp.id === id).cout--
        // 更新View
        this.updateView()
    },
    updateView() {
        state.wantP = state.wantP.filter(wp => wp.count > 0)
    }
}


const actions = {
    // 购物车会有网络请求
    buy: async (ctx) => {
        // 先清空购物车，如果失败了再回滚；

        // 清空购物车
        (function bufferClean() {
            // 回滚缓存&状态记录
            const buffer = ctx.state.wantP
            deal = 'dealing'
            //clean
            ctx.commit('setWantP', [])

            const status = buyProducts()// await#交易成败是随机的
            // 成功购买
            if (status) {
                ctx.commit('setDeal', 'success!')
                // 更新库存
                ctx.state.wantP.forEach(wp => {
                    ctx.commit('productsM/update', wp)
                });
            } else {
                // 购买失败
                ctx.commit('setDeal', 'failed!')
                //rollback
                ctx.commit('setWantP', buffer)
            }
            console.log('buy')
        })()
    },
    // 添加购物车逻辑上是再getP之后执行的
    addTo: (ctx, product) => {
        ctx.commit('setDeal', null)
        // 有库存
        if (product.number > 0) {
            // 添加到购物车之前要判断是不是首次添加,即购物车存不存在同id对象
            const isExistBefore = state.wantP.find(wp => wp.id === product.id)
            // 没有添加再=在购物车过
            if (!isExistBefore) {
                ctx.commit('addFirst', product)
            } else {
                // 之前添加过
                ctx.commit('addAgain', product)
            }
        }
        console.log('addTo')
    }
}
const getters = {
    // 完善产品信息
    _wantP: (state, _, rootState) => {
        console.log('补全购物车产品信息')
        // flag = false
        //根据id找到产品完整信息
        return state.wantP.map(wp => {
            const wpToProduct = rootState.productsM.products.find(p => p.id === wp.id)
            return {
                // 每件物品个数'在购物车的
                count,
                // 每件物品的编号
                id: wpToProduct.id,
                title: wpToProduct.title,
                price: wpToProduct.price,
            }
        })
        //表示 恢复工作 完毕
        // flag = true
    },
    //计算总价
    TotalPrice: (_, getters) => {
        console.log('TotalPrice')
        return getters._wantP.reduce((total, p) => {
            return total + p.price * p.count
        }, 0)
    }
}

const trolleyM = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default trolleyM