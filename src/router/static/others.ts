import type { RouteRecordRaw } from 'vue-router'

const others: RouteRecordRaw[] = [
  {
    path: '/security-regulations',
    meta: {
      title: '安全条例',
      type: '安全措施',
    },
    component: () => import('@/views/other/security-regulations.vue'),
  },
  {
    path: '/emergency-plan',
    meta: {
      title: '应急预案',
      type: '安全措施',
    },
    component: () => import('@/views/other/emergency-plan.vue'),
  },
  {
    path: '/contact-phone',
    meta: {
      title: '联系电话',
      type: '安全措施',
    },
    component: () => import('@/views/other/contact-phone.vue'),
  },
]

export default others
