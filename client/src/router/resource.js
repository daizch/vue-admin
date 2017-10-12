const Layout = ()=>import('@/views/layout/layout.vue')
import Container from 'views/layout/container.vue'

export default {
  name: 'resource',
  path: 'resource',
  meta: {
    requiresAuth: true,
    title: '资源管理系统'
  },
  component: Container,
  redirect: '/resource/list',
  children: [
    {
      path: 'operation',
      meta: {
        requiresAuth: true,
        title: '资源操作'
      },
      component: Container,
      children: [
        {
          path: 'create',
          meta: {
            requiresAuth: true,
            title: '创建资源'
          },
          component: resolve => require.ensure([], () => resolve(require('@/views/resource/operation/create/index.vue')), 'resource')
        },
        {
          path: 'update',
          hidden: true,
          meta: {
            requiresAuth: true,
            title: '更新资源'
          },
          component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
        }
      ]
    },
    {
      path: 'policy',
      meta: {
        requiresAuth: true,
        title: '资源策略操作'
      },
      component: Container,
      children: [
        {
          path: 'create',
          meta: {
            requiresAuth: true,
            title: '创建资源策略'
          },
          component: resolve => require.ensure([], () => resolve(require('@/views/resource/policy/create/index.vue')), 'resource')
        },
        {
          path: 'update',
          hidden: true,
          meta: {
            requiresAuth: true,
            title: '更新资源'
          },
          component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
        }
      ]
    },
    {
      path: 'list',
      meta: {
        requiresAuth: true,
        title: '资源列表'
      },
      component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
    },
    {
      path: 'detail',
      meta: {
        requiresAuth: true,
        title: '资源详情'
      },
      component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
    },
    {
      path: 'policy',
      meta: {
        requiresAuth: true,
        title: '资源策略管理'
      },
      component: Container,
      children: [
        {
          path: 'create',
          meta: {
            requiresAuth: true,
            title: '创建策略'
          },
          component: resolve => require.ensure([], () => resolve(require('@/views/resource/policy/create/index.vue')), 'resource')
        },

      ]
    },
  ]
}
