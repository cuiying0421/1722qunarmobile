import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import City from '@/views/City'
import Daytrip from '@/views/Daytrip'

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
  },
  {
    path: '/daytrip/:id',
    name: 'Daytrip',
    component: Daytrip,
    props: true
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
