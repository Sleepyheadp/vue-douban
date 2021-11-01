import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//让vue内部可以使用vuex插件库，vuex全局状态级管理工具

import Num from "./Num"
import myCar from "./MyCar"
export default new Vuex.Store({
  modules: {
    Num,myCar
  }
})
