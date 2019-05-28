<template>
  <div class="header">
    <div class="brand">BYInternet</div>
    <div class="buttons">
      <div class="params">
        <i class="fa fa-cog"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  height: 50px;

  font-family: 'Open sans', sans-serif;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 10px rgb(220, 220, 220);

  .brand {
    font-size: 24px;
  }

  .buttons > div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    width: 30px;
    background-color: rgb(236, 236, 240);
    border-radius: 5px;
  }
}
</style>
