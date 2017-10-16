<template>
  <div>
    <DrawerNavigation></DrawerNavigation>
    <DrawerTrigger></DrawerTrigger>
  </div>
</template>

<script>
import DrawerNavigation from './DrawerNavigation'
import DrawerTrigger from './DrawerTrigger'

export default {
  name: 'Drawer',
  components: {
    DrawerNavigation,
    DrawerTrigger
  },
  methods: {}
}
</script>