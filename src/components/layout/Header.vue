<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.jpg" />
      </router-link>
    </div>

    <div class="nav">
      <router-link to="/account">
        <div class="nav-item">
          <i class="material-icons">account_circle</i>
        </div>
      </router-link>
      <router-link to="/chat">
        <div class="nav-item">
          <i class="material-icons">chat</i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
a {
  color: #331811 !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;

  .logo {
    margin: 3px 0 0;
    max-width: 150px;
  }

  .nav {
    display: flex;
    .nav-item {
      margin: 0 5px 0 10px;
      height: 24px;
    }
  }
}
</style>
