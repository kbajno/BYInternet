<template>
  <div class="board">
    <div class="column-container"
      v-for="column in columnsData"
      :key="column.name"
    >
      <Column :columnLinks="column.links" :columnName="column.name" />
    </div>
  </div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'app',
  components: {
    Column
  },
  props: {
    columnsData: Array
  }
}
</script>

<style lang="scss">
.board {
  display: flex;
  flex-direction: row;

  padding: 16px 0;

  height: 100%;
  width: 100%;

  overflow-x: auto;

  .column-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex-shrink: 0;

    padding: 0 8px;

    width: 360px;

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }
  }
}
</style>
