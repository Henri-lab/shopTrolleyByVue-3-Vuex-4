
import { createStore } from 'vuex'
// 直接导入在其他文件创建的router；也可以用import { useRouter } from 'vue-router'的方法创建
import productsModule from './module/productsM'
import trolleyModule from './module/trolleyM'

const store = createStore({
   modules:{
    productsModule,
    trolleyModule
   }
})
export default store