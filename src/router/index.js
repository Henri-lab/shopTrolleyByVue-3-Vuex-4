import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import { useStore } from 'vuex'

const store=useStore()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      // children[route1,route2,...]
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/login.vue')
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      // 动态路由
      path: '/trolley/:userID',
      name: 'user_trolley',
      component: () => import('../views/Trolley.vue'),
      // 此路由需要login验证
      meta: { requiresAuth: true }
    },
    {
      path: '/:notFound(.*)*',
      redirect: '/home'
    }
  ]
})

// #hook
// to 是一个即将进入的目标路由对象
// to.matched 是一个数组，包含了当前路由（to）所匹配到的所有嵌套路径片段的路由记录
router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要验证用户身份  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // 如果需要验证身份，并且用户未登录  
  if (requiresAuth && store.state.loginCheckM.login === 0) {
    // 重定向到登录页面  
    next({
      path: '/login',
      // query: { redirectPath: to.fullPath } // 将即将跳转的路由'to'的路径作为查询参数传递，在用户登录成功后将他们重定向回他们最初想要访问的页面
    })
  } else {
    // 如果不需要验证身份，或者用户已登录，则继续导航  
    next();
  }
})


export default router
