<template>
  <form class="message-form" @submit.prevent="submitForm">
    <input
      type="text"
      v-model="message"
      class="form-control"
      placeholder="Message"
      required
    />
    <button type="submit" class="btn btn-success">Send</button>
  </form>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", {
        message: this.message
      });
      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.message-form {
  display: flex;

  button {
    background: #331811;
    color: white;
    font-size: 16px;
  }

  input {
    flex: 1;
  }

  button,
  input {
    border: 1px solid #331811;
    padding: 10px 15px;
  }
}
</style>
