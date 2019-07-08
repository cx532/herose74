import Vue from 'vue'
import App from './App.vue' 
Vue.config.productionTip = false

import "../crud-template/bootstrap/css/bootstrap.css"
import "../crud-template/css/index.css"

import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
