<template>
  <el-container id="app">
    <el-header>
      <el-menu
        :default-active="activeIndex"
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
    </el-header>
    <el-container>
      <el-aside width="20%" id="aside"><div></div></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
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

#app .el-header {
  padding: 0px;
}

#aside {
  padding: 30px;
}

#aside > div {
  border-right: 2px solid wheat;
}
</style>
