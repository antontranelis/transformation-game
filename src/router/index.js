import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Level1 from '@/components/Level1'
import Level2 from '@/components/Level2'
import Level3 from '@/components/Level3'
import Shop from '@/components/Shop'
import QR from '@/components/QR'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/qr',
      name: 'qr',
      component: QR
    },
    {
      path: '/level1',
      name: 'level1',
      component: Level1
    },
    {
      path: '/level2',
      name: 'level2',
      component: Level2
    },
    {
      path: '/level3',
      name: 'level3',
      component: Level3
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    }
  ]
})
