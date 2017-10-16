<template>
<div class="content">
  <div class="main">
    <h1>About Us</h1>
    <p>switchbreakはgamo, sorafka, mikanimaによるエレクトロニカ／ドリルンベース／IDMユニットです。</p>
    <h2>Members</h2>
    <div class="members">
      <div class="member">
        <h1>gamo</h1>
        <img src="/static/images/avatar/gamo.jpg" alt="gamo">
        <p><a href="https://soundcloud.com/gamobox" target="_new">SoundCloud</a></p>
        <p><a href="https://soundcloud.com/gamobox" target="_new">Twitter</a></p>
      </div>
      <div class="member">
        <h1>sorafka</h1>
        <img src="/static/images/avatar/sorafka.jpg" alt="sorafka">
        <p><a href="https://soundcloud.com/sorafka" target="_new">SoundCloud</a></p>
        <p><a href="https://soundcloud.com/ssniwa" target="_new">Twitter</a></p>
      </div>
      <div class="member">
        <h1>mikanima</h1>
        <img src="/static/images/avatar/mikanima.jpg" alt="mikanima">
        <p><a href="https://soundcloud.com/mikanima" target="_new">SoundCloud</a></p>
        <p><a href="https://soundcloud.com/mikanima" target="_new">Twitter</a></p>
      </div>
    </div>
  </div>
  <sidebar-content></sidebar-content>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_MEMBER } from '@/vuex/mutation-types'
import SidebarContent from '@/components/common/Sidebar'

export default {
  name: 'About',
  components: {
    SidebarContent
  },
  metaInfo: {
    title: 'About Us'
  }
}
</script>

<style lang="scss">
.members {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  .member {
    margin-right: 1em;
    h1 {
      font-size: 1rem;
    }
    img {
      width: 88px;
      height: 88px;
      border-radius: 44px;
      display: block;
      object-fit: cover;
    }
    p {
      margin-top: .5em;
      margin-bottom: .5em;
    }
  }
}
</style>