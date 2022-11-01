import Vue from 'vue'
import Router from 'vue-router'
import VueDemo from '@/components/VueDemo'
import Users from '@/components/Users'
import Firms from '@/components/Firms'
import Products from '@/components/Products'
import Transactions from '@/components/Transactions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Users
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    /* Uncomment this to view the firms and products tabs * /

    {
      path: '/firms',
      name: 'firms',
      component: Firms
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }, /**/
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    }

  ]
})
