import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const Article = () => import('../views/pages/Article.vue')
const Category = () => import('../views/pages/Category.vue')

Vue.use(VueRouter)

export const childrenRoutes = [
  {
    path: '/Home',
    name: 'Article',
    component: Article,
    meta: {
      name: '文章发布'
    },
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category,
    meta: {
      name: '分类管理'
    },
  }
]

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Home',
    children: childrenRoutes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
