import '@/permission.js' // permission control
import '@/styles/global/index.scss' // global style
import element from 'element-ui'
import 'normalize.css' // resets css
import Vue from 'vue'
import App from './App.vue'
// global filter
import * as filters from './plugins/filters'
import router from './router'
import store from './store'

Object.keys(filters).forEach(key => {
  Vue.config(key, filters[key])
})

Vue.use(element)
Vue.config.productionTip = false

// import Plugin from '@/utils/axios'
// Vue.use(Plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
