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
    // Assign a unique chunk name for the about page
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/education',
    name: 'education',
    // Use a unique chunk name for the education page
    component: () => import(/* webpackChunkName: "education" */ '../views/EducationView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    // Use a unique chunk name for the projects page
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    // Use a unique chunk name for the testimonials page
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/TestimonialsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // Use a unique chunk name for the contact page
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
