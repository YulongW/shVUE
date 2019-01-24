import io from "socket.io-client";

export default class Socket {
  constructor(user) {
    const options = {
      reconnection: false,
      query: {
        ...user
      }
    };
    this.socket = io("http://uswanzi.com", options);
    // this.socket = io("http://localhost:3001", options);
  }

  sendMessage(username, avatar, message) {
    this.socket.emit("send_message", {
      username,
      avatar,
      message
    });
  }

  onReceiveMessage(callback) {
    this.socket.on("message", data => {
      callback(data);
    });
  }

  onUserConnected(callback) {
    this.socket.on("user_connected", data => {
      callback(data);
    });
  }

  onConnectionError(callback) {
    this.socket.on("connect_error", error => {
      callback(error);
    });
  }
}
