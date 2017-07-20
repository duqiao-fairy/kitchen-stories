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
      component: require('../app/home')
    },
    {
      path: '/detail',
      name: 'detail',
      component: require('../app/detail')
    },
    {
      path: '/search',
      name: 'search',
      component: require('../app/search')
    }
  ]
})
