<template>
  <div class="card">
    <div class="card--content">
      <img :src="faviconLink" alt="">
      <a :href="linkData.url" target="_blank">{{ linkData.name }}</a>
    </div>
    <div class="card--buttons">
      <i class="fa fa-pencil" @click="showModal = true"></i>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <label for="CardName">Card name</label>
        <input type="text" id="CardName" v-model="card.name">
        <label for="cardUrl">Card URL</label>
        <input type="text" id="cardUrl" v-model="card.url">
        <button @click="editCard">Edit column</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Card',
  components: {
    Modal
  },

  props: {
    linkData: Object,
    colId: Number
  },

  data () {
    return (
      {
        faviconLink: 'https://www.google.com/s2/favicons?domain=' + this.linkData.url,
        showModal: false,
        card: {
          id: this.linkData.id,
          name: this.linkData.name,
          url: this.linkData.url
        }
      }
    )
  },

  methods: {
    editCard () {
      this.$store.dispatch('editCard', { colId: this.colId, card: this.card })
      this.showModal = false
    }
  }
}
</script>
