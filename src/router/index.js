import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入路由
import audio from "./audio"
import broadcast from "./broadcast"
import group from "./group"
import home from "./home"
import mine from "./mine"
import moviedetail from "./moviedetail"

const routes = [
  {path:"/",redirect:"mine"},
  audio,broadcast,group,home,mine,,moviedetail,
  {path:"/notfound",name:"notfound",component:()=>import("@/views/Notfound/Notfound")},
  {path:"*",redirect:"notfound"}
]

const router = new VueRouter({
  routes
})
//导出路由
export default router

//整合上面三个代码
/*
  export default new VueRouter({
    routes:[
      audio,broadcast,group,home,mine
    ]
  })

*/
