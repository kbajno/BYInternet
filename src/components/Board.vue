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
        <button @click="showModal = true">Add column</button>
        <Modal v-if="showModal" @close="showModal = false">
          <div slot="body">
            <label for="columnName">Column name</label>
            <input type="text" id="columnName" v-model="columnName">
            <button @click="addColumn">Add column</button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Column from './Column.vue'
import Modal from './Modal.vue'

export default {
  name: 'Board',
  components: {
    Column,
    Modal
  },

  data () {
    return {
      columnName: '',
      showModal: false
    }
  },

  methods: {
    addColumn () {
      this.$store.dispatch('addColumn', this.columnName)
      this.showModal = false
      this.columnName = ''
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
