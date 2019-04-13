import Vue from 'vue'
import Router from 'vue-router'
import PlayField from '@/components/PlayField.vue'
import FourInARow from '@/components/FourInARow.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game/',
      name: 'PlayField',
      component: PlayField,
      children: [
        {
          path: 'four-in-a-row',
          name: 'FourInARow',
          component: FourInARow
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
