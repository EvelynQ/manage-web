import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Repair from '@/components/Repair'
import Head from '@/components/Head'
import Abnormal from '@/components/Abnormal'
import Check from '@/components/Check'
import Reject from '@/components/Reject'
import Register from '@/components/Register'
import Equipinfo from '@/components/Equipinfo'
import ChangePass from '@/components/ChangePass'
import Documents from '@/components/Documents'
import Main from '@/components/Main'
import UserManage from '@/components/admin/UserManage'
import DepartManage from '@/components/admin/DepartManage'
import ClassManage from '@/components/admin/ClassManage'
import EquipManage from '@/components/admin/EquipManage'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'user',
          component: UserManage
        },
        {
          path: 'depart',
          component: DepartManage
        },
        {
          path: 'class',
          component: ClassManage
        },
        {
          path: 'equip',
          component: EquipManage
        }
      ]
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
      path: '/head',
      name: 'Head',
      component: Head
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
      path: '/register',
      name: 'Register',
      component: Register
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
