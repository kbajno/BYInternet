<template>
  <div>
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Connection</button>
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.replace('board')
      }).catch(err => {
        alert('Oops. ' + err.message)
      })
    }
  }
}
</script>
