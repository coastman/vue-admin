// 初始化相关样式优先加载
import './styles/_normalize.css'
import './styles/common.scss'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import API from '@/api'
// 按需引用组件
import './plugins/element-ui'
import mavonEditor from 'mavon-editor'

import * as filters from '@/filter.ts'

Vue.config.productionTip = false
Vue.prototype.$api = API
Vue.use(mavonEditor)

Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string ]: Function })[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
