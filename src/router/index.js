import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth'
import Register from '@/components/Register'
import SubscriptionList from '@/components/SubscriptionList'
import SubscriptionCreate from '@/components/SubscriptionCreate'
import Payment from '@/components/Payment'
import ForgotPassword from '@/components/ForgotPassword.vue'
import SubLinks from '@/components/SubLinks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/subscription-list',
      name: 'SubscriptionList',
      component: SubscriptionList
    },
    {
      path: '/subscription-list/:msg',
      name: 'SubscriptionUpdatedList',
      component: SubscriptionList
    },
    {
      path: '/subscription-create',
      name: 'SubscriptionCreate',
      component: SubscriptionCreate
    },
    {
      path: '/subscription-create/:pk',
      name: 'SubscriptionUpdate',
      component: SubscriptionCreate
    },

    {
      path: '/sub-link',
      name: 'SubLinks',
      component: SubLinks
    },
  
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
      },      
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
  ]
})
