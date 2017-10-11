import Vue from 'vue'
import Router from 'vue-router'
import nodeRoute from './node'
import accountRoute from './account'
import resourceRoute from './resource'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      meta: {
        requiresAuth: false,
        title: '登录'
      },
      component: resolve => require.ensure([], () => resolve(require('@/views/login/index.vue')), 'login')
    },
    accountRoute,
    {
      path: '/',
      meta: {requiresAuth: true, title: '首页'},
      component: resolve => require.ensure([], () => resolve(require('@/views/layout/layout.vue')), 'common'),
      children: [resourceRoute, nodeRoute]
    },
    {
      name: 'not-found',
      path: '*',
      meta: {
        requiresAuth: false,
        title: 'not found'
      },
      component: resolve => require.ensure([], () => resolve(require('@/views/error.vue')), 'common')
    }
  ]
})
