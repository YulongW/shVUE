import io from "socket.io-client";

export default class Socket {
  constructor() {
    this.socket = io("http://uswanzi.com");
    // this.socket = io("http://localhost:3001");
  }

  sendMessage(username, avatar, message) {
    this.socket.emit("SEND_MESSAGE", {
      username,
      avatar,
      message
    });
  }

  onReceiveMessage(callback) {
    this.socket.on("MESSAGE", data => {
      callback(data);
    });
  }
}
