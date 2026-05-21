import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_shouye1beifen4 from '../views/lanhu_shouye1beifen4/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_shouye1beifen4"
  },
  {
    path: '/lanhu_shouye1beifen4',
    name: 'lanhu_shouye1beifen4',
    component: lanhu_shouye1beifen4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
