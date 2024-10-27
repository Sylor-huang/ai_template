import { createRouter, createWebHistory } from 'vue-router'
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
        path: 'supper_lottos',
        name: 'SuperLotto',
        component: () => import('@/views/SupperLottos/Index.vue'),
        meta: { title: 'SuperLotto' },
      }, {
        path: 'supper_lottos/:id',
        name: 'Lotto Detail',
        component: () => import('@/views/SupperLottos/Show.vue'),
        meta: { activeMenu: "/supper_lottos" },
        hidden: true
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'three_lottos',
        name: 'ThreeLotto',
        component: () => import('@/views/ThreeLottos/Index.vue'),
        meta: { title: 'ThreeLotto' },
      }, {
        path: 'three_lottos/:id',
        name: 'ThreeLotto Detail',
        component: () => import('@/views/ThreeLottos/Show.vue'),
        meta: { activeMenu: "/three_lottos" },
        hidden: true
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'rules',
        name: 'Rules',
        component: () => import('@/views/Rules/Index.vue'),
        meta: { title: 'Rules' },
      }
    ]
  },{
    path: '/',
    component: Layout,
    children: [
      {
        path: 'contracts',
        name: 'Contracts',
        component: () => import('@/views/Contracts/Index.vue'),
        meta: { title: 'Contracts' },
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
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
