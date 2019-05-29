<template>
  <div id="app">
    <Header />
    <Board :columnsData="columns"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Header,
    Board
  },
  data () {
    return (
      {
        columns: [
          {
            name: 'Social',
            links: [
              {
                name: 'Facebook',
                url: 'https://facebook.com'
              },
              {
                name: 'Twitter',
                url: 'https://twitter.com'
              }
            ]
          },
          {
            name: 'Development',
            links: [
              {
                name: 'Dev.to',
                url: 'https://dev.to'
              },
              {
                name: 'Hashnode',
                url: 'https://hashnode.com/'
              },
              {
                name: 'CSSTricks',
                url: 'https://css-tricks.com/'
              },
              {
                name: 'Alligator.io',
                url: 'https://alligator.io'
              }
            ]
          }
        ]
      }
    )
  }
}
</script>

<style>
@import "./assets/minireset.css";

#app {
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  font-family: 'Roboto', sans-serif;
  background-color: rgb(236, 236, 240);
}
</style>
