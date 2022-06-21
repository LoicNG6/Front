import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import HomeView from '../views/mainPage/Home.vue'
import LoginView from '../views/authentication/LoginView.vue'
import RegistrationView from '../views/authentication/RegistrationView.vue'


const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/home',
    component: HomeView,
    name: 'homeView',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login',
  },
  {
    path: '/registration',
    component: RegistrationView,
    name: 'registration',
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
