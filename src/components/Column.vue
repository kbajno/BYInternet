<template>
  <div class="column">
    <div class="column--header">
      <div>
        {{ columnData.name }}
      </div>
      <div>
        <i class="fa fa-ellipsis-h"></i>
      </div>
    </div>
    <div v-for="link in columnData.links" :key="link.name">
      <Card :linkName="link.name" :linkUrl="link.url" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'column',
  components: {
    Card
  },
  props: {
    columnData: Object
  }
}
</script>
