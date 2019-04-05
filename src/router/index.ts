import Vue from 'vue'
import Router from 'vue-router'
import PlayField from '@/components/PlayField.vue'
import Home from '@/views/Home.vue'

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
      name: 'Home',
      component: Home
    }
  ]
})
