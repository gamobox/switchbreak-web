import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Complete from '@/components/pages/Complete'
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/complete', name: 'complete', component: Complete },
    { path: '*', component: NotFound }
  ]
})
