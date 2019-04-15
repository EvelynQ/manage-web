import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Repair from '@/components/Repair'
import Sider from '@/components/Sider'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/repair',
      name: 'Repair',
      component: Repair
    },
    {
      path: '/sider',
      name: 'Sider',
      component: Sider
    },
  ]
})
