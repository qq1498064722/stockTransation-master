import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/cotent/Index.vue')
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
        path:'/login',
        name:'login',
        component:() => import('../views/cotent/Login.vue')
    },
    {
        path:'/activeityend',
        name:'activeityend',
        component:() => import('../views/cotent/ActiveityEnd.vue')
    },
    {
        path:'/dayli',
        name:'dayli',
        component:() => import('../views/cotent/Dayli.vue')
    },
    {
        path:'/activeitystar',
        name:'activeitystar',
        component:() => import('../views/cotent/ActiveityStar.vue')
    },
    {
        path:'/policy',
        name:'policy',
        component:() => import('../views/cotent/Policy.vue')
    },
    {
        path:'/join',
        name:'join',
        component:() => import('../views/cotent/Join.vue')
    },
    {
        path:'/question',
        name:'question',
        component:() => import('../views/cotent/Question.vue')
    },
    {
        path:'/exam',
        name:'exam',
        component:() => import('../views/cotent/Test.vue')
    },
    {
        path:'/financ',
        name:'financ',
        component:() => import('../views/cotent/Financ.vue')
    },
    {
        path:'/newsend',
        name:'newsend',
        component:() => import('../views/cotent/Newsend.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
