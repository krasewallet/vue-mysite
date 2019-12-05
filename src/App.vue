<template>
  <div id="app">
    <div class="header"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  async mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightblue;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  height: 60px;
  background-color: cornflowerblue;
}
</style>
