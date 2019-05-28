<template>
  <div class="column-container">
    <div class="column">
      <div class="column-header">
        <div class="column-name">
          Column Name
        </div>
        <div class="column-buttons">
          <i class="fa fa-ellipsis-h"></i>
        </div>
      </div>
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

  padding: 0 8px;

  width: 360px;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  .column {
    padding: 10px;

    height: 100%; // Full height column

    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgb(220, 220, 220);

    overflow-y: auto;

    .column-header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      margin: 0 10px;
      padding: 5px 0;

      font-weight: bold;
    }
  }
}
</style>
