<template>
  <div class="column">
    <div class="column-header">
      <div class="column-name">
        {{ columnName }}
      </div>
      <div class="column-buttons">
        <i class="fa fa-ellipsis-h"></i>
      </div>
    </div>
    <div v-for="link in columnLinks" :key="link.name">
      <Card :linkName="link.name" :linkUrl="link.url" />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  props: {
    columnName: String,
    columnLinks: Array
  }
}
</script>

<style lang="scss">
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
</style>
