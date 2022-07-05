import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      // 此处的路由渲染到Welcome组件的router-view中
      path: '/',
      name: 'welcome-page',
      component: resolve => require(['@/components/Welcome.vue'], resolve),
      children: [
        {
          path: 'videoDownloader',
          component: resolve => require(['@/components/VideoDownload/VideoDownloader.vue'], resolve)
        },
        {
          path: 'videoManager',
          component: resolve => require(['@/components/VideoManager/videoManager.vue'], resolve)
        },
        {
          path: '*',
          redirect: '/videoDownloader'
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
