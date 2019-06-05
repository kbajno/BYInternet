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
    <div v-for="link in columnData.links" :key="link.id">
      <Card :linkData="link" :colId="columnData.id"/>
    </div>
    <button @click="showModal = true">Add link</button>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <label for="CardName">Card name</label>
        <input type="text" id="CardName" v-model="cardName">
        <label for="cardUrl">Card URL</label>
        <input type="text" id="cardUrl" v-model="cardUrl">
        <button @click="addCard">Add column</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Modal from '@/components/Modal'

export default {
  name: 'Column',
  components: {
    Card,
    Modal
  },

  props: {
    columnData: Object
  },

  data () {
    return {
      cardName: '',
      cardUrl: '',
      showModal: false
    }
  },

  methods: {
    addCard () {
      this.$store.dispatch('addCard', {
        colId: this.columnData.id,
        card: {
          id: Date.now(),
          name: this.cardName,
          url: this.cardUrl
        }
      })
      this.showModal = false
      this.cardName = ''
      this.cardUrl = ''
    }
  }

}
</script>
