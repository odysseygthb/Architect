import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import archSimpleGrids from "@/components/archSimpleGrids";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simple-grids',
    name: 'Simple grids',
    component: archSimpleGrids
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
