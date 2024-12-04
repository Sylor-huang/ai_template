import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home' }
      },
      {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
      },
      {
        path: '/403',
        component: () => import('@/views/error-page/403'),
        hidden: true
      },
      {
        path: '/500',
        component: () => import('@/views/error-page/500'),
        hidden: true
      }
    ]
  }, 
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home#token',
        component: () => import('@/views/home/index'),
        meta: { title: 'Token' },
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home#route_map',
        component: () => import('@/views/home/index'),
        meta: { title: 'RouteMap' },
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home#partners',
        component: () => import('@/views/home/index'),
        meta: { title: 'Partner' },
      }
    ]
  },
  {
    path: '/languages',
    component: Layout,
    name: 'Language',
    alwaysShow: true, // will always show the root menu
    hidden: true,
    meta: {
      title: 'Language'
    },
    children: [
      {
        path: '/chinese',
        name: 'Chinese',
        meta: { title: 'Chinese' },
        hidden: true
      },
      {
        path: '/english',
        name: 'English',
        meta: { title: 'English' },
        hidden: true
      }
    ]
  }

]

export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory('/ai_template/'),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        top: 40,
        el: to.hash,
        behavior: 'smooth'
      }
    }else{
      return { top: 0, behavior: 'smooth' }
    }
  },
  routes: constantRoutes
})

export default router
