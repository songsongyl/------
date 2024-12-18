import { createRouter, createWebHashHistory } from 'vue-router'
import food from '../components/地域美食/regionalCuisine.vue'


const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),//路由器的工作模式
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home', //首页
      component: () => import('../components/首页/Home.vue'),

    },
      {
          path: '/icecream', //冰淇淋
          component:() => import('../components/冰淇淋/Index.vue')
    },
    {
      path: '/tea', //茶饮
      component: () => import('../components/茶饮/Index.vue'),
      children: [
        {
          path: 'chuantong', // 传统茶饮的子路由路径
          component: () => import('../components/茶饮/chuantong.vue') // 传统茶饮对应的组件
        },
        {
          path: 'xiandai', // 现代茶饮的子路由路径
          component: () => import('../components/茶饮/xiandai.vue') // 现代茶饮对应的组件
        },
        {
          path: 'talkshare', // 交流分享的子路由路径
          component: () => import('../components/茶饮/talkshare.vue') // 交流分享对应的组件
        }
      ]

    },
    {
      path: '/food',//地域美食
      component: food
    },
    {
          path: '/baking',//烘焙
      component: () => import('../components/烘焙/Baking.vue'),
       
    },


    //异国料理
    {
      path: '/yiguoliaoli',
      component: () => import('../components/异国料理/Tbs.vue'),
    },
    {
      path: '/ChickenStepsVue',
      component: () => import('../components/异国料理/ChickenSteps.vue'),
      name: 'chickenstepsRoute'
    },
    {
      path: '/MangoSteps',
      component: () => import('../components/异国料理/MangoSteps.vue'),
      name: 'mangostepsRoute'
    },
    {
      path: '/SoupSteps',
      component: () => import('../components/异国料理/SoupSteps.vue'),
      name: 'soupstepsRoute'
    },
    {
      path: '/TofoSteps',
      component: () => import('../components/异国料理/TofoSteps.vue'),
      name: 'tofostepsRoute'
    },
    {
      path: '/CreamStep',
      component: () => import('../components/异国料理/CreamStep.vue'),
      name: 'creamstepRoute'
    }



  ]
})
export default router
