import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
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
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
