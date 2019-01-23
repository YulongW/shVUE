<template>
  <div class="footer">
    <ul>
      <li v-for="link in links" :key="link.url">
        <a :href="link.url" target="_blank" rel="noopener">{{ link.desc }}</a>
      </li>
    </ul>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {
          url: "https://vuejs.org",
          desc: "docs"
        },
        {
          url: "https://forum.vuejs.org",
          desc: "forum"
        },
        {
          url: "https://cli.vuejs.org",
          desc: "vue cli"
        },
        {
          url: "https://chat.vuejs.org",
          desc: "community chat"
        },
        {
          url: "https://news.vuejs.org",
          desc: "news"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-top: 1px solid #d3d3d3;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px 0 0;
}
a {
  color: #bd897b;
  text-decoration: none;
}
</style>
