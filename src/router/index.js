import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Done from '../components/Done.vue'
import Working from '../components/Working.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Working',
    name: 'Working',
    component: Working 
  },
  {
    path: '/Done',
    name: 'Done',
    component: Done
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
