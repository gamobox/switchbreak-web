<template>
  <div class="coverImage" v-bind:class="current">
    <div class="coverImage__filter" id="js-coverImageFilter"></div>
  </div>  
</template>

<style lang="scss" scoped>
.coverImage {
  min-width: 320px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: left;
  background-image: url('/static/images/bg-main.jpg');
  will-change: background-position;
  pointer-events: none;
  &.release { background-position: center; }
  &.about { background-position: right; }
  &.contact { background-position: left; }
  &.complete { background-position: right; }
  &__filter {
    z-index: 1;
    background:#9b93c8;
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }
}
</style>

<script>
export default {
  name: 'CoverImage',
  props: {
    current: String
  }
}
</script>
