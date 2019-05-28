<template>
  <div class="card">
    <div class="card-content">
      <img src="https://www.google.com/s2/favicons?domain=https://google.com" alt="">
      <a href="https://google.com">Google</a>
    </div>
    <div class="card-buttons">
      <i class="fa fa-pencil"></i>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;
  padding: 10px;

  background-color: rgb(245, 245, 245);
  border-radius: 5px;

  .card-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    img {
      height: 16px;
      width: 16px;
    }

    a {
      margin-left: 10px;

      color: inherit;
      text-decoration: none;
    }
  }

  .card-buttons {
    display: none;
    margin-right: 5px;
  }

  &:hover .card-buttons {
    display: block;
  }
}
</style>
