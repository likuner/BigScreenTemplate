import Vue from 'vue'
import VueRouter from 'vue-router'
import BigScreen from '../views/BigScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: BigScreen
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
