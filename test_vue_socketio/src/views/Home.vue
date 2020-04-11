<template>
  <div class="home">
    <button @click="clickButton">Put Name</button>
  </div>
</template>

<script>

export default {
  name: "Home",
  sockets: {
    connect() {
      console.log("socket connected");
    },
    // 接收Server資料，方法1
    greet(data) {
      console.log(data);
    }
  },
  methods: {
    clickButton() {
      console.log(this.$socket);
      // 發送資料到Server
      this.$socket.emit("upName", {
        name: "Jimmy is me.",
      });

    // 接收Server資料，方法2
       this.sockets.subscribe("greet", data => {
        console.log(data);
      });
    }
  },
};
</script>
