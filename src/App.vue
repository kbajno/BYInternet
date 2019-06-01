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

<style lang="scss">
@import "./assets/minireset.css";
@import "assets/main.scss";
</style>
