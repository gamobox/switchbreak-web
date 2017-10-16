<template>
<div class="drawer" v-bind:class="{'is-active': isMenuActive}">
  <div class="drawer__bg"></div>
  <div class="drawer__content menu">
    <div class="menu__item">
      <router-link :to="{ path: '/' }" exact>Index</router-link>
    </div>
    <div class="menu__item">
      <router-link :to="{ path: 'about' }">About Us</router-link>
    </div>
    <div class="menu__item">
      <router-link :to="{ path: 'contact' }">Contact</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DrawerNavigation',
  computed: {
    isMenuActive() {
      return this.$store.getters.isMenuActive
    }
  }
}
</script>
