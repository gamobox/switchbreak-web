<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <drawer></drawer>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Drawer from '@/components/common/Drawer'
import AppHeader from '@/components/common/AppHeader'
import AppFooter from '@/components/common/AppFooter'
import { CLOSE_MENU } from './vuex/mutation-types'

const config = {
  apiKey: 'AIzaSyC91SqEEUSz5lkJTqKKZ9CBElRBX8p8qNY',
  authDomain: 'switchbreak-40b92.firebaseapp.com',
  databaseURL: 'https://switchbreak-40b92.firebaseio.com',
  projectId: 'switchbreak-40b92',
  storageBucket: 'switchbreak-40b92.appspot.com',
  messagingSenderId: '63395561875'
}

Firebase.initializeApp(config)

export default {
  name: 'app',
  firebase: {},
  metaInfo: {
    title: 'switchbreak official website',
    titleTemplate: '%s | switchbreak'
  },
  components: {
    Drawer,
    AppHeader,
    AppFooter
  },
  computed: {
    route() {
      return this.$route
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.$store.dispatch(CLOSE_MENU)
      next()
    })
  }
}
</script>

<style lang="scss">
@import './styles/app';
</style>
