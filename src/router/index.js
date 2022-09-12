import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home =()=>import('../views/home')
const category =()=>import('../views/category')
const cart =()=>import('../views/cart')
const profile =()=>import('../views/profile')
const detail =()=>import('../views/detail')


const routes = [
  {
    path:'/',
    redirect:'/home'
  },{
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
