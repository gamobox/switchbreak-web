<template>
<div class="content">
  <div class="main">
    <h1>Page Not Found</h1>
    <p>Sorry, the page you were looking for doesn’t exist.</p>
  </div>
  <sidebar-content></sidebar-content>
</div>
</template>
<script>
import SidebarContent from '@/components/common/Sidebar'

export default {
  name: 'NotFound',
  components: {
    SidebarContent
  },
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>
