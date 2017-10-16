<template>
<div class="content">
  <div class="main">
    <h1>Contact</h1>
    <p>お問い合わせの受付が完了しました。</p>
  </div>
  <sidebar-content></sidebar-content>
</div>
</template>
<script>
import SidebarContent from '@/components/common/Sidebar'

export default {
  name: 'Complete',
  metaInfo: {
    title: 'Contact'
  },
  components: {
    SidebarContent
  }
}
</script>
