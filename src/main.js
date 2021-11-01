import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//加载通用样式
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入swiper.min.css样式文件
import "../node_modules/swiper/css/swiper.min.css"
//axios
import axios from "axios"
Vue.prototype.$http = axios
//引入mint-ui
import {InfiniteScroll,Header,Button,Tabbar,TabItem,Cell} from "mint-ui"
Vue.use(InfiniteScroll)
//mint-ui组件的注册
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);
//引入自定义指令
import "./modules/driective"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
