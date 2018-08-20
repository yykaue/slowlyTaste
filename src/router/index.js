import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {
  index,
  landing,
  withClients,
  client,
  diagram,
  unnamed
} from './route'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/background/withClients'
    },
    {
      path: '/background',
      name: 'index',
      meta: {
        title: '管理系统'
      },
      component: index,
      children: [
        {
          path: 'withClients',
          name: 'withClients',
          meta: {
            title: '意向客户'
          },
          component: withClients
        },
        {
          path: 'client',
          name: 'client',
          meta: {
            title: '客户'
          },
          component: client
        },
        {
          path: 'diagram',
          name: 'diagram',
          meta: {
            title: '图表'
          },
          component: diagram
        },
        {
          path: 'unnamed',
          name: 'unnamed',
          meta: {
            title: '未命名'
          },
          component: unnamed
        }
      ]
    },
    {
      path: '/landing',
      name: 'landing',
      meta: {
        title: '登录'
      },
      component: landing
    }
  ]
})
