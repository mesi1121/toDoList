import Vue from 'vue'
import VueRouter from 'vue-router'
// コンポーネントをインポート
import Index from "../views/tasks/index";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
