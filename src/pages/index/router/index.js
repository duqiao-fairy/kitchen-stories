import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../app/home')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../app/detail')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../app/search')
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('../app/today')
    }
  ]
})
