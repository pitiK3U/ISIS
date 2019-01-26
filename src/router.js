import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const TimeTable = () => import(/* webpackChunkName: "TimeTable" */ './views/TimeTable.vue')
const Settings = () => import(/* webpackChunkName: "Settings" */ './views/Settings.vue')

Vue.use(Router)

// {
//  path: '/about',
//  name: 'about',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import( /*webpackChunkName: "about"*/  './views/About.vue')
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/TimeTable',
      name: 'TimeTable',
      component: TimeTable
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
