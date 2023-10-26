import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { customAnimation } from '@/animations/customAnimation';
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import SplashscreenPage from '../views/SplashscreenPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Splashscreen',
    component: SplashscreenPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: {
      transition: customAnimation
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      transition: customAnimation
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: AboutPage,
    meta: {
      transition: customAnimation
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: AboutPage,
    meta: {
      transition: customAnimation
    }
  },
  {
    path: '/support',
    name: 'Support',
    component: AboutPage,
    meta: {
      transition: customAnimation
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
