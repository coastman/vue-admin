import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const Article = () => import('../views/pages/Article.vue')

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Home',
    meta: {
      name: '文章发布'
    },
    children: [
      {
        path: 'home',
        component: Article
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Home,
    redirect: '/about/index',
    meta: {
      name: 'About'
    },
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
