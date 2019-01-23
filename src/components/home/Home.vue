<template>
  <div class="home">
    <h2>Devteam Training</h2>
    <h3>Introduction to Vue.js</h3>

    <div class="demo">
      <h3>You Will Build</h3>
      <img src="@/assets/demo.jpg" />
    </div>

    <div class="stack">
      <h3>With</h3>
      <img src="@/assets/vue-logo.png" height="100px" />
      <img src="@/assets/socket-io-logo.svg" />
    </div>

    <h3>Enjoy!</h3>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  h3 {
    color: #8c331b;
  }

  .stack {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .demo {
    margin: 20px 0;

    img {
      margin-top: 8px;
      padding: 10px 20px;
      border: 1px solid #bd897b;
    }
  }
}
</style>
