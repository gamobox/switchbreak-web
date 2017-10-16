<template>
<div class="drawerTrigger" v-on:click="toggleMenu"
  v-bind:class="{'is-active': isMenuActive}">
  <div class="drawerTrigger__icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
</template>

<script>
import { TOGGLE_MENU } from '../../../vuex/mutation-types'

export default {
  name: 'DrawerTrigger',
  computed: {
    isMenuActive() {
      return this.$store.getters.isMenuActive
    }
  },
  methods: {
    toggleMenu() {
      // console.log(this.$store);
      this.$store.dispatch(TOGGLE_MENU)
    }
  }
}
</script>
