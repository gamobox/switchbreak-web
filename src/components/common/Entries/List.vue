<template>
  <div>
    <div v-show="entries.isLoading">Now Loading...</div>
    <entry-item
      v-for="entry in entries.collection"
      :key="entry.id"
      :entry="entry">
    </entry-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_ENTRIES, CLEAR_ENTRIES } from '@/vuex/mutation-types'
import entryItem from './Item'

export default {
  name: 'entry-list',
  components: {
    entryItem
  },
  beforeCreate() {
    this.$Progress.start()
    this.$store.dispatch(CLEAR_ENTRIES)
    this.$store.dispatch(GET_ENTRIES).then(() => {
      this.$Progress.finish()
    })
  },
  computed: {
    ...mapState({
      entries: state => state.entries
    })
  }
}
</script>

<style>

</style>
