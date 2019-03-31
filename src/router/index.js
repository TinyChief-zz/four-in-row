import Vue from 'vue'
import Router from 'vue-router'
import PlayField from '@/components/PlayField'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game/:id',
      name: 'PlayField',
      component: PlayField
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
