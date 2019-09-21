<template>
  <div id="app">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(img, index) in imgList" :key="index">
        <div class="img-container"><img v-bind:src="img" /></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      imgList: [
        require("./assets/imgs/1.jpg"),
        require("./assets/imgs/2.jpg"),
        require("./assets/imgs/3.jpg"),
        require("./assets/imgs/4.jpg")
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-container {
  width: 100%;
  height: 100%;
  background-color: lightblue;
}
.img-container img {
  height: 100%;
}
</style>
