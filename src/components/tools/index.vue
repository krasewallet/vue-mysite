<template>
  <div style="margin-top: 15px;">
    <p>
      <span>邮箱清空:</span>
      <el-input
        v-model="email"
        placeholder="邮箱"
        style="width:200px"
      ></el-input>
      <el-input
        v-model="pwd"
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
      email: "",
      pwd: ""
    };
  },
  methods: {
    clearEmail() {
      this.$axios({
        method: "post",
        url: "/clear",
        data: {
          email: this.email,
          pwd: this.pwd
        }
      })
        .then(() => {
          this.$notify({
            title: "提示",
            message: "操作成功",
            position: "bottom-right",
            type: "success"
          });
        })
        .catch(() => {
          this.$notify({
            title: "警告",
            message: "操作失败",
            position: "bottom-right",
            type: "warning"
          });
        });
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
