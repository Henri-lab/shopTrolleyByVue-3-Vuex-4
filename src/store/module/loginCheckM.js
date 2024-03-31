// 管理用户状态
// @login 登录状态，0表示未登录
const state = {
    login: 0,
    userID: 'default' 
}

const getters = {
    getterValue: state => {
        return state.login
    },
      getterValue2: state => {
        return state.userID
    }
}

const mutations = {
    updateValue: (state, payload) => {
        state.login = payload
    },
     updateValue2: (state, payload) => {
        state.userID = payload
    }
}

const actions = {}

const loginCheckM = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default loginCheckM