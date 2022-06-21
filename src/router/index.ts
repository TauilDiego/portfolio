import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import VitrineHome from '@/views/VitrineHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: VitrineHome
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
