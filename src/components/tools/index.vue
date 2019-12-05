<template>
  <div style="margin-top: 15px;">
    <p>
      <span>邮箱清空:</span>
      <el-input
        v-model="username"
        placeholder="用户名"
        style="width:100px"
      ></el-input>
      <el-input
        v-model="password"
        placeholder="密码"
        type="password"
        style="width:200px"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-delete"
        @click="clearEmail"
      ></el-button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    clearEmail () {
      console.log(this.username, this.password);
    }
  }
};
</script>

<style>
p {
  text-align: left;
}
p span {
  margin: 15px;
}
</style>
