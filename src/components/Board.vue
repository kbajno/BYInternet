<template>
  <div class="board">
    <div class="board--container"
      v-for="column in columns"
       :key="column.name"
    >
      <Column :columnData="column" />
    </div>
  </div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'board',
  components: {
    Column
  },

  computed: {
    columns () {
      return this.$store.state.columns
    }
  },

  created () {
    this.$store.dispatch('fetchColumns')
  }
}
</script>
