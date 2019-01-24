<template>
  <div :class="[{ received: received }, 'message-item']">
    <div class="avatar-container">
      <Avatar :username="username" :img="avatar" />
    </div>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/common/Avatar";

export default {
  name: "MessageItem",
  props: {
    username: String,
    message: String,
    avatar: String,
    received: Boolean
  },
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
.message-item {
  display: flex;
  align-items: center;
  margin: 15px 5px;

  &.received {
    justify-content: flex-end;

    .avatar-container {
      order: 1;
      margin: 0 0 0 15px;
    }
  }

  .avatar-container {
    margin: 0 15px 0 0;
  }

  .message {
    word-break: break-all;
    border-radius: 16px;
    background: #d4e4f1;
    border: 1px solid #8abee8;
    padding: 10px 20px;
  }
}
</style>
