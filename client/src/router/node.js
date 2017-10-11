export default {
  path: 'node',
  meta: {
    requiresAuth: true,
    title: '节点管理系统'
  },
  component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard'),
  children: [
    {
      path: 'operation',
      meta: {
        requiresAuth: true,
        title: '节点操作'
      },
      component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard'),
      children: [
        {
          path: 'create',
          meta: {
            requiresAuth: true,
            title: '创建节点'
          },
          component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
        },
        {
          path: 'update',
          meta: {
            requiresAuth: true,
            title: '更新节点'
          },
          component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
        }
      ]
    },
    {
      path: 'list',
      meta: {
        requiresAuth: true,
        title: '节点列表'
      },
      component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
    },
    {
      path: 'detail',
      meta: {
        requiresAuth: true,
        title: '节点详情'
      },
      component: resolve => require.ensure([], () => resolve(require('../views/main/index')), 'dashboard')
    },
  ]
}
