import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import store from './store/'
import Unicon from 'vue-unicons'
import { uniStar, uniCommentAltLines, uniChartBar, uniExclamationCircle, uniCog } from 'vue-unicons/src/icons'

Unicon.add([uniStar, uniCommentAltLines, uniChartBar, uniExclamationCircle, uniCog])
Vue.use(Unicon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
