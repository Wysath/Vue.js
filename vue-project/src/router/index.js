import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/notes',
      name:'notes',
      component: () => import('../views/NoteView.vue')
    },
    {
      path: '/boucle',
      name: 'boucle',
      component: () => import('../views/BoucleView.vue')
    },
    {
      path: '/pays',
      name: 'pays',
      component: () => import('../views/PaysView.vue')
    }
  ]
})

export default router
