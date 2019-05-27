<template>
  <div class="column-container">
    <div class="column">
      <div>Column</div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'app',
  components: {
    Card
  }
}
</script>

<style lang="scss">
.column-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-shrink: 0;

  padding: 0 3px;

  width: 360px;

  border: 3px solid green;

  &:first-child {
    padding-left: 6px;
  }

  &:last-child {
    padding-right: 6px;
  }

  .column {
    border: 3px solid magenta;

    overflow-y: auto;
  }
}
</style>
