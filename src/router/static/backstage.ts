import type { RouteRecordRaw } from 'vue-router'

const backstage: RouteRecordRaw[] = [
  {
    path: '/user-manage',
    meta: {
      title: '用户管理',
      type: '后台管理',
    },
    component: () => import('@/views/backstage/user-manage.vue'),
  },
  {
    path: '/backstage-task-manage',
    meta: {
      title: '任务管理',
      type: '后台管理',
    },
    component: () => import('@/views/backstage/backstage-task-manage.vue'),
  },
]

export default backstage
