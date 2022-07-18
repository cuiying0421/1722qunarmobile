import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import City from '@/views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
