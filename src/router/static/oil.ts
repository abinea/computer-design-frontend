import type { RouteRecordRaw } from 'vue-router'

const refuelArea: RouteRecordRaw[] = [
  {
    path: '/refuel-area-img',
    meta: {
      title: '图片处理',
      type: '加油区',
    },
    component: () => import('@/views/oil/img-handle.vue'),
  },
  {
    path: '/refuel-area-video',
    meta: {
      title: '视频监控',
      type: '加油区',
    },
    component: () => import('@/views/oil/video-handle.vue'),
  },
]

const unloadArea: RouteRecordRaw[] = [
  {
    path: '/unload-area-img',
    meta: {
      type: '卸油区',
      title: '图片处理',
    },
    component: () => import('@/views/oil/img-handle.vue'),
  },
  {
    path: '/unload-area-video',
    meta: {
      type: '卸油区',
      title: '视频监控',
    },
    component: () => import('@/views/oil/video-handle.vue'),
  },
]

export default [...refuelArea, ...unloadArea]
