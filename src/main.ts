// 初始化相关样式优先加载
import './styles/_normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import API from '@/api'
// 按需引用组件
import * as elementComponents from './plugins/element-ui'
import mavonEditor from 'mavon-editor'

Vue.config.productionTip = false
Vue.prototype.$api = API

Vue.use(mavonEditor)
// TODO 使用 any 类型不太妥当
Object.keys(elementComponents).forEach((key: string): void => {
  Vue.use((elementComponents as any)[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
