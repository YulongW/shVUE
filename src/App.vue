<template>
  <div class="app">
    <header>
      <Header></Header>
    </header>

    <div class="body">
      <router-view />
    </div>

    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.5;
}
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  header {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  }

  .body {
    flex: 1 0 auto;
    padding: 20px 15px;
    display: flex;
  }

  footer {
    flex: 0 1 auto;
  }
}
</style>
