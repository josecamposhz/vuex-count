import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../views/Padre')
    },
    {
      path: '/docs',
      component: () => import('../views/Vuex')
    },
    {
      path: '/code',
      component: () => import('../views/Code')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router