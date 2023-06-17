import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import staticRoutes from './static'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/',
    redirect: '/refuel-area-img',
    component: Layout,
    children: staticRoutes,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
