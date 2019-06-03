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
    <div>
      <label for="CardName">Card name</label>
      <input type="text" id="CardName" v-model="cardName">
      <label for="cardUrl">Card URL</label>
      <input type="text" id="cardUrl" v-model="cardUrl">
      <button @click="addCard">Add column</button>
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
  },

  data () {
    return {
      cardName: '',
      cardUrl: ''
    }
  },

  methods: {
    addCard () {
      this.$store.dispatch('addCard', {
        colName: this.columnData.name,
        card: {
          name: this.cardName,
          url: this.cardUrl
        }
      })
    }
  }

}
</script>
