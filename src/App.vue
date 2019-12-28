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
      <el-aside width="20%" id="myaside"><myAside></myAside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from "./components/aside/index";
export default {
  name: "app",
  components: { myAside },
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

#myaside {
  padding: 30px;
}

#myaside > div {
  border-right: 2px dotted lightsteelblue;
  height: 100%;
}
</style>
