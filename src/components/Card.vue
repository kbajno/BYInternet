<template>
  <div class="card">
    <div class="card--content">
      <img :src="faviconLink" alt="">
      <a :href="linkUrl" target="_blank">{{ linkName }}</a>
    </div>
    <div class="card--buttons">
      <i class="fa fa-pencil"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    linkName: String,
    linkUrl: String
  },
  data () {
    return (
      {
        faviconLink: 'https://www.google.com/s2/favicons?domain=' + this.linkUrl
      }
    )
  }
}
</script>
