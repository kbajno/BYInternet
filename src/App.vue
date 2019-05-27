<template>
  <div id="app">
    <Header />
    <Board />
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

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
