import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Repair from '@/components/Repair'
import Sider from '@/components/Sider'
import Head from '@/components/Head'
import Adduser from '@/components/Adduser'
import Addclass from '@/components/Addclass'
import Addequip from '@/components/Addequip'
import Abnormal from '@/components/Abnormal'
import Check_repair from '@/components/Check_repair'
import Reject from '@/components/Reject'
import Liuyan from '@/components/Liuyan'
import Register from '@/components/Register'
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
      {
          path: '/head',
          name: 'Head',
          component: Head
      },
      {
          path: '/adduser',
          name: 'Adduser',
          component: Adduser
      },
      {
          path: '/addclass',
          name: 'Addclass',
          component: Addclass
      },
      {
          path: '/addequip',
          name: 'Addequip',
          component: Addequip
      },
      {
          path: '/abnormal',
          name: 'Abnormal',
          component: Abnormal
      },
      {
          path: '/check_repair',
          name: 'Check_repair',
          component: Check_repair
      },
      {
          path: '/reject',
          name: 'Reject',
          component: Reject
      },
      {
          path: '/liuyan',
          name: 'Liuyan',
          component: Liuyan
      },
      {
          path: '/register',
          name: 'Register',
          component: Register
      }
  ]
})
