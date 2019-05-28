<template>
  <div class="board">
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
    <Column />
  </div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'app',
  components: {
    Column
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
}
</style>
