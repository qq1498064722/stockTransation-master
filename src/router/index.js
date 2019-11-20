import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/cotent/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/dictory',
    name:'dictory',
    component:() => import('../views/cotent/DictoryMangement.vue')

  },
  {
        path:'/login',
        name:'login',
        component:() => import('../views/cotent/Login.vue')
    },
    {
        path:'/asd',
        name:'asd',
        component:() => import('../views/cotent/asd.vue')
    },
    {
        path:'/dayli',
        name:'dayli',
        component:() => import('../views/cotent/dayli.vue')
    },
    {
        path:'/activeity',
        bane:'avtiveity',
        component:() => import('../views/cotent/ActiveityStar.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
