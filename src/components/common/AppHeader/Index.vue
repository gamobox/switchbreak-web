<template>
  <div class="brand">
    <router-link :to="{ path: '/' }" exact>
      <h1>switchbreak</h1>
      <h2>Official Website</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style lang="scss">
.brand {
  position: absolute;
  left: var(--gutter-width);
  top: 2.5vh;
  a {
    color: var(--color-body-text);
    display: inline-block;
    font-size: 0;
    padding: 8px;
    &.active {
      pointer-events: none;
    }
  }
  h1, h2 {
    margin: 0;
    line-height: 1;
  }
  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: -.03em;
  }
  h2 {
    font-size: .85rem;
    letter-spacing: -.03em;
  }
}
</style>
