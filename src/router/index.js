import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'
import HomeView from '../views/mainPage/Home.vue'
import LoginView from '../views/authentication/LoginView.vue'
import RegistrationView from '../views/authentication/RegistrationView.vue'
import AboutView from '../views/AboutView.vue'
import ArticleView from '../views/article/ArticleView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginView,
    name: 'login',
    children: [
      {
        path: '/home',
        component: HomeView,
        name: 'home',
        children: [
          {
            path: '/articles',
            component: ArticleView,
            name: 'articles',
          },
          {
            path: '/about',
            component: AboutView,
            name: 'about'
          },
        ],
      },
    ],
  },
  {
    path: '/registration',
    component: RegistrationView,
    name: 'registration',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
