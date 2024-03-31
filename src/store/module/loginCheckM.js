// 管理用户状态
// @login 登录状态，0表示未登录
const state = {
    login: 0,
    user: null 
}

const getters = {
    getterValue: state => {
        return state.login
    }
}

const mutations = {
    updateValue: (state, payload) => {
        state.value = payload
    }
}

const actions = {
    updateActionValue({ commit }) {
        commit('updateValue', payload)
    }
}

const loginCheckM = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default loginCheckM