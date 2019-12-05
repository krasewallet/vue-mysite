<template>
  <div id="app">
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#6495ED"
        text-color="#FFFFFF"
      >
        <el-menu-item index="1"
          ><router-link :to="{ name: 'home' }">主页</router-link></el-menu-item
        >
        <el-menu-item index="2"
          ><router-link :to="{ name: 'tools' }">工具</router-link></el-menu-item
        >
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1"
    };
  },
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
</style>
