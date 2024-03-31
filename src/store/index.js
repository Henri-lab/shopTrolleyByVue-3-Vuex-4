
import { createStore } from 'vuex'
// 直接导入在其他文件创建的router；也可以用import { useRouter } from 'vue-router'的方法创建
import productsM from './module/productsM'
import trolleyM from './module/trolleyM'
import loginCheckM from './module/loginCheckM'

const store = createStore({
   modules:{
    productsM,
    trolleyM,
    loginCheckM
   }
})
export default store
//store.state.module.state/mutations....