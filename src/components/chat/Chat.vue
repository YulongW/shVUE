<template>
  <div class="chat">
    <h2>Devteam Chat</h2>

    <div class="message-list-container">
      <MessageList :messages="messages" />
    </div>

    <div class="message-form-container">
      <MessageForm @submit="sendMessage" />
    </div>
  </div>
</template>

<script>
import Socket from "@/utils/socket";
import Utils from "@/utils/utils";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

export default {
  name: "Chat",
  components: {
    MessageList,
    MessageForm
  },
  data() {
    return {
      username: "",
      avatar: "",
      messages: [],
      socket: null
    };
  },
  methods: {
    sendMessage(data) {
      this.socket.sendMessage(this.username, this.avatar, data.message);
    }
  },
  mounted() {
    const user = Utils.getUserInfo();
    this.username = user.username;
    this.avatar = user.avatar;

    this.socket = new Socket(user);

    this.socket.onReceiveMessage(data => {
      this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  width: 100%;

  .message-list-container {
    flex: 1;
    height: 70%;
    overflow: auto;
  }
}
</style>
