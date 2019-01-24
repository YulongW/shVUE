<template>
  <div class="message-list">
    <MessageItem
      v-for="(message, index) in messages"
      :key="index"
      :username="message.username"
      :avatar="message.avatar"
      :message="message.message"
    />
  </div>
</template>

<script>
import MessageItem from "./MessageItem";

export default {
  name: "MessageList",
  props: {
    messages: Array
  },
  components: {
    MessageItem
  }
};
</script>
