import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '../views/DetailView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import( '../views/AddView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
