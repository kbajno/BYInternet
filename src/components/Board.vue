<template>
  <div class="board">
    <div class="board--container"
      v-for="column in board"
       :key="column.name"
    >
      <Column :columnData="column" />
    </div>
    <button @click="addColumn('Salut')">Add a column</button>
    {{ $store.state.status.message }}
  </div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'board',
  components: {
    Column
  },

  methods: {
    addColumn (name) {
      this.$store.dispatch('addColumn', name)
    }
  },

  computed: {
    board () {
      return this.$store.state.board.columns
    }
  },

  created () {
    this.$store.dispatch('fetchColumns')
  }
}
</script>
