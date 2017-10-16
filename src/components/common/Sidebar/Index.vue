<template>
  <div class="sidebar">
    <section>
      <h2>Pages</h2>
      <ul>
        <li>
          <router-link :to="{ path: '/' }" exact>Index</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/about' }" exact>About</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/contact' }" exact>Contact</router-link>
        </li>
      </ul>
    </section>

    <section>
      <h2>Members</h2>
      <ul>
        <li>
          <a href="https://soundcloud.com/gamobox" target="_blank">gamo</a>
        </li>
        <li>
          <a href="https://soundcloud.com/mikanima" target="_blank">mikanima</a>
        </li>
        <li>
          <a href="https://soundcloud.com/sorafka" target="_blank">sorafka</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Infomation</h2>
      <ul>
        <li>
          <a href="https://switchbreak.bandcamp.com/" target="_blank">bandcamp</a>
        </li>
        <li>
          <a href="https://twitter.com/switchbreakinfo" target="_blank">twitter</a>
        </li>
      </ul>
    </section>
  </div>

</template>

<script>
export default {
  name: 'sidebar-content'
}
</script>

<style>

</style>
