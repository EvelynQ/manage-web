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
import Check from '@/components/Check'
import Reject from '@/components/Reject'
import Liuyan from '@/components/Liuyan'
import Register from '@/components/Register'
import Adddepart from '@/components/Adddepart'
import Equipinfo from '@/components/Equipinfo'
import ChangePass from '@/components/ChangePass'
import Documents from '@/components/Documents'
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
          path: '/check',
          name: 'Check',
          component: Check
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
      },
      {
          path: '/adddepart',
          name: 'Adddepart',
          component: Adddepart
      },
      {
          path: '/equipinfo',
          name: 'Equipinfo',
          component: Equipinfo
      },
      {
          path: '/changepass',
          name: 'ChangePass',
          component: ChangePass
      },
      {
          path: '/documents',
          name: 'Documents',
          component: Documents
      }
  ]
})
