<template>
  <div class="avatar">
    <img :src="img" alt="avatar" />
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    username: String,
    img: String
  }
};
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  align-items: center;

  img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .username {
    font-weight: bold;
  }
}
</style>
