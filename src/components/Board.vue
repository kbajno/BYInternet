<template>
  <div class="board">
    <div class="board--column-container"
      v-for="column in board"
       :key="column.name"
    >
      <Column :columnData="column" />
    </div>
    <div class="board--column-container">
      <div class="column">
        <div class="column--header">
          Add a column
        </div>

        <div>
          <label for="columnName">Column name</label>
          <input type="text" id="columnName" v-model="columnName">
          <button @click="addColumn">Add column</button>
        </div>
      </div>
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

  data () {
    return {
      columnName: ''
    }
  },

  methods: {
    addColumn () {
      this.$store.dispatch('addColumn', this.columnName)
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
