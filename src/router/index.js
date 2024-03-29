import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path: '/list',
      name: '商品列表',
      component: () => import('../views/List.vue')
    },
    {
      path: '/trolley',
      name: '购物车',
      component: () => import('../views/Trolley.vue')
    },
    {
      path:'/:notFound(.*)*',
      redirect:'/home'
    }
  ]
})

export default router
