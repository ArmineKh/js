import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Categories from '../views/Categories.vue'
import History from '../views/History.vue'
import Planning from '../views/Planning.vue'
import Register from '../views/Register.vue'
import Record from '../views/Record.vue'
import Detail from '../views/Detail.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{layout:'main'},
    component: Home
  },
  {
    path: '/register',
    name:'register',
    meta:{layout:'empty'},
    component: Register
  },
  {
    path: '/login',
    name:'login',
    meta:{layout:'empty'},
    component: Login
  },
  {
    path: '/categories',
    name:'categories',
    meta:{layout:'main'},
    component: Categories
  },
  {
    path: '/history',
    name:'history',
    meta:{layout:'main'},
    component: History
  },
  {
    path: '/planning',
    name:'planning',
    meta:{layout:'main'},
    component: Planning
  },
  {
    path: '/record',
    name:'record',
    meta:{layout:'main'},
    component: Record
  },
  {
    path: '/detail/:id',
    name:'detail',
    meta:{layout:'main'},
    component: Detail
  },
  {
    path: '/profile',
    name:'profile',
    meta:{layout:'main'},
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
