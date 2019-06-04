<template>
  <div class="card">
    <div class="card--content">
      <img :src="faviconLink" alt="">
      <a :href="linkUrl" target="_blank">{{ linkName }}</a>
    </div>
    <div class="card--buttons">
      <i class="fa fa-pencil" @click="showModal = true"></i>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Modal title</h3>
      <p slot="body">Modal content</p>
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
    linkName: String,
    linkUrl: String
  },

  data () {
    return (
      {
        faviconLink: 'https://www.google.com/s2/favicons?domain=' + this.linkUrl,
        showModal: false
      }
    )
  }
}
</script>
