import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { customAnimation } from '@/animations/customAnimation';
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
    component: HomePage,
    meta: {
      transition: customAnimation
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const toTransition = to.meta.transition || null;
  const fromTransition = from.meta.transition || null;
  if (toTransition || fromTransition) {
    const animation = toTransition || fromTransition;
    router.transition = animation;
  }
  next();
});

export default router
