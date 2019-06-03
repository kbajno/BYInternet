<template>
  <div id="app">
    <Header />
    <Board />
    <StatusMessage v-if="$store.state.status.message" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Board from './components/Board.vue'
import StatusMessage from './components/statusMessage.vue'

export default {
  name: 'app',
  components: {
    Header,
    Board,
    StatusMessage
  }
}
</script>

<style lang="scss">
@import "./assets/minireset.css";
@import "assets/main.scss";
</style>
