<template>
  <div class="entry">
    <time class="entry__publishDate" v-date-format="'Do MMMM YYYY'">{{ entry.created_at }}</time>
    <vue-markdown :source="getContent(entry)"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'entryItem',
  components: {
    VueMarkdown
  },
  props: {
    entry: {
      type: Object,
      default: null
    }
  },
  methods: {
    getContent: entry => {
      if (!entry.files) return {}
      return Object.values(entry.files)[0].content
    }
  }
}
</script>
