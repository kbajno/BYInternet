<template>
  <div>
    <p>Let's create a new account!</p>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="password">
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.replace('board')
      }).catch(err => {
        alert('Oops. ' + err.message)
      })
    }
  }
}
</script>
