import { createRouter } from 'vue-router'

import { createWebHashHistory } from 'vue-router'

// import { createWebHistory } from 'vue-router'

//常规引入 未使用懒加载
// import HomeView from '../views/HomeView.vue'

const routes = [

  //常规引入 未使用懒加载
  /*
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage/index'),
  },
  {
    path: '/about',
    name: 'about',

    // require 路由懒加载 
    // component: () => require('@/views/AboutPage/index.vue').default,
    // import 路由懒加载 语法糖
    // component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage/index'),

    children: [
      // 添加子路由
      {
        path: '', // 子路由的路径为空，表示默认展示子路由
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage/index'),

      },
      {
        path: 'info', // 子路由的路径为 '/about/info'
        name: 'about-info',
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutInfo.vue')
      },
    ]
  },

  /*
   *
   *除 import语法糖之外的 另一种路由懒加载方式
   *
   *{
   *    path: '/about',
   *    name: 'about',
   *    component: resolve => {
   *      require.ensure(['../views/AboutView.vue'], () => {
   *        resolve(require('../views/AboutView.vue'));
   *      }, 'about');
   *    }
   *}
   *  
  */


]

const router = createRouter({

  /*

  // 常用

  哈希路由 切换路由时  浏览器  会有 /#/
  http://localhost:8081/#/about

  */

  history: createWebHashHistory(),


  /*
  
  history 路由 
  http://localhost:8081/about

  */


  // history: createWebHistory(),
  routes
})

export default router
