import Vue from 'vue'
import App from './App'
import router from '@/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
// router.push({ path: '/Home' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});