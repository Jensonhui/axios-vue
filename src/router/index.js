import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterList from '@/router/router-list'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: RouterList
})

export default router
