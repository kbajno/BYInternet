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

  font-family: 'Roboto', sans-serif;
  background-color: rgb(236, 236, 240);
}
</style>
