import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeWelcome from '@/views/Home/HomeWelcome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/#',
    name: 'home',
    component: HomeWelcome
  },
  {
    path: '/',
    name: 'home',
    component: HomeWelcome
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
