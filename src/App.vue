<template>
  <div id="app">
    <div class="header"></div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(img, index) in imgList" :key="index">
        <div class="img-container"><img v-bind:src="img" /></div>
      </el-carousel-item>
    </el-carousel>
    <el-table :data="tableData" style="width: 100%" row-key="id">
      <el-table-column
        property="title"
        label="歌曲"
        min-width="30%"
      ></el-table-column>
      <el-table-column property="url" label="播放" min-width="70%">
        <template slot-scope="scope">
          <audio controls :src="scope.row.url" />
        </template>
      </el-table-column>
    </el-table>
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
      ],
      tableData: []
    };
  },
  async mounted() {
    const res = await this.$axios.get("/songs?playlist=2994239216");
    console.log(res)
    this.tableData = res.data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightblue;
}
.header {
  height: 60px;
  background-color: cornflowerblue;
}
.img-container {
  width: 100%;
  height: 100%;
}
.img-container img {
  height: 100%;
}
</style>
