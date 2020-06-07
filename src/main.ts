import './styles/_normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as elementComponents from './plugins/element-ui'

Vue.config.productionTip = false

// TODO 使用 any 类型不太妥当
Object.keys(elementComponents).forEach((key: string): void => {
  Vue.use((elementComponents as any)[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
