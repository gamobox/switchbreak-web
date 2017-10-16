<template>
<div class="wrapper">
  <div class="content">
    <div class="main">
      <h1>Contact</h1>
      <contact-form></contact-form>
    </div>
    <sidebar-content></sidebar-content>
  </div>
</div>
</template>
<script>
import ContactForm from '../common/Form/ContactForm'
import SidebarContent from '@/components/common/Sidebar'

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm,
    SidebarContent
  }
}
</script>
