import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'
import HomeView from '../views/mainPage/Home.vue'
import LoginView from '../views/authentication/LoginView.vue'
import RegistrationView from '../views/authentication/RegistrationView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
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
  },
  {
    path: '/home',
    component: HomeView,
    name: 'home',
    children: [
      {
        path: '/about',
        component: AboutView,
        name: 'about'
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
