<template>
  <div class="chat">
    <h2>Devteam Chat</h2>
  </div>
</template>

<script>
import Socket from "@/utils/socket";

export default {
  name: "Chat",
  data() {
    return {
      socket: new Socket()
      // socket.sendMessage(username, avatar, message)
      // socket.onReceiveMessage(callback) 
    };
  }
};
</script>
