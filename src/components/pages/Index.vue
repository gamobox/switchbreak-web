<template>
<div class="content">
  <entry-list class="main"></entry-list>
  <sidebar-content></sidebar-content>
</div>
</template>

<script>
import EntryList from '@/components/common/Entries/List'
import SidebarContent from '@/components/common/Sidebar'

export default {
  name: 'Index',
  components: {
    EntryList,
    SidebarContent
  },
  metaInfo: {
    titleTemplate: 'switchbreak official website'
  }
}
</script>
