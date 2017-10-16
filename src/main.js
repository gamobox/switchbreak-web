// polyfills
import 'whatwg-fetch'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import Meta from 'vue-meta'
import { sync } from 'vuex-router-sync'
import Vuelidate from 'vuelidate'
import VueProgressBar from 'vue-progressbar'
import Vuetify from 'vuetify'
import App from '@/App'
import store from '@/vuex/store'
import router from '@/router/index'
import directive from '@/directive'

Vue.use(VueFire)
Vue.use(Vuelidate)
Vue.use(VueProgressBar, {
  color: '#E0F000'
})
Vue.use(Vuetify)
Vue.use(Meta)

Vue.directive('date-format', directive.dateformat)

Vue.config.productionTip = false
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted() {
    this.$Progress.finish()
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
})
