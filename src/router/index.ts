import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import HomeWelcome from '@/views/Home/HomeWelcome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeWelcome
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
