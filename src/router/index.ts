import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const Article = () => import('../views/pages/Article.vue')
const Category = () => import('../views/pages/Category.vue')

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
        name: 'Article',
        component: Article
      }
    ]
  },
  {
    path: '/category',
    name: 'Home',
    component: Home,
    redirect: '/category/index',
    meta: {
      name: '分类管理'
    },
    children: [
      {
        path: 'index',
        name: 'Category',
        component: Category
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
