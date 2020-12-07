import Vue from 'vue'
import App from './App.vue'
import router from './router'
import httpUrl from '@/units/http-urls'
import CookieTool from '@/units/cookie-tool'
import { axiosPost, axiosGet } from '@/units/http-request'

Vue.config.productionTip = false
Vue.prototype.$url = httpUrl
Vue.prototype.$get = axiosGet
Vue.prototype.$post = axiosPost
Vue.prototype.$cookie = new CookieTool()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
