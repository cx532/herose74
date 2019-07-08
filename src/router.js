import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//注册VueRoouter插件
Vue.use(VueRouter)
//导入herolist组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
//创建路由对象
const router = new VueRouter({
    //当浏览器地址中的路由地址#/herorouoter-link生成的a标签的href一致时，添加样式
    // linkExactActiveClass:'active',
    //不精准匹配样式
    linkActiveClass:'active',
  routes: [
    {path:'/',redirect:'/hero'},
    {name:'hero',path:'/hero',component: HeroList},
    {name:'weapon',path:'/weapon',component: WeaponList},
    {name:'equip',path:'/equip',component: EquipList},
  ]
})
//导出router对象
export default router