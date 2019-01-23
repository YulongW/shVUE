<template>
  <div class="account">
    <div class="header">
      <h2>Account</h2>
      <Avatar :username="username" :img="img" />
    </div>

    <div class="update">
      <label>
        Username
        <input type="text" v-model="usernameInput" />
      </label>
      <label>
        Avatar Link
        <input type="text" v-model="imgInput" />
      </label>

      <button @click="updateProfile">Update</button>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/common/Avatar";
import Utils from "@/utils/utils";

export default {
  name: "Account",
  components: {
    Avatar
  },
  data() {
    return {
      username: "",
      img: "",
      usernameInput: "",
      imgInput: ""
    };
  },
  created() {
    const user = Utils.getUserInfo();
    this.username = user.username;
    this.img = user.avatar;
    this.usernameInput = user.username;
    this.imgInput = user.avatar;
  },
  methods: {
    updateProfile() {
      const user = Utils.getUserInfo();

      const newUser = {
        ...user,
        username: this.usernameInput,
        avatar: this.imgInput
      };

      this.username = this.usernameInput;
      this.img = this.imgInput;

      Utils.updateUserInfo(newUser);
    }
  }
};
</script>

<style lang="scss" scoped>
.account {
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
  }

  .update {
    label {
      display: block;
      padding: 20px 0 0;
      font-weight: bold;
    }
    input {
      padding: 8px 15px;
      margin-top: 10px;
      display: block;
      width: 100%;
    }
    button {
      border: 1px solid #331811;
      padding: 10px 15px;
      background: #331811;
      color: white;
      float: right;
      margin: 40px 0;
    }
    button:active {
      background: #65372c;
    }
  }
}
</style>
