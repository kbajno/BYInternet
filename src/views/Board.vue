<template>
  <div>
    <h1>Board</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'board',
  data () {
    return {}
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
