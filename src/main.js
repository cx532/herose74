import Vue from 'vue'
import App from './App.vue' 
Vue.config.productionTip = false
import axios from "axios";
//配置axios的基地址,调用请求方法的时候，会自动把路径拼接到基地址后面
axios.defaults.baseURL = 'http://localhost:3000/'
//所有vue实例都具有axios属性，给vue构造函式的原型上添加成员
Vue.prototype.axios = axios;

import "../crud-template/bootstrap/css/bootstrap.css"
import "../crud-template/css/index.css"

import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
