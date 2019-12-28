<template>
  <div id="info">
    <div><img class="photo" src="../../assets/imgs/photo.jpg" /></div>
    <p>
      <span style="justify-self:center"
        ><i class="el-icon-star-on"></i>个人签名：</span
      >
      <span>时光荏苒，岁月如梭。</span>
      <span style="grid-area:c">素年锦时，BUG还多。</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "myAside",
  data() {
    return {};
  }
};
</script>
<style>
@font-face {
  font-family: "Cedarville Cursive";
  font-style: normal;
  font-weight: 400;
  src: local("Cedarville Cursive"), local("Cedarville-Cursive"),
    url("../../assets/fonts/Cursive.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
#info .photo {
  width: 50%;
}
#info p {
  font-family: "Cedarville Cursive", cursive;
  display: grid;
  grid-template-columns: 8em 12em;
  grid-template-rows: auto auto;
  grid-template-areas:
    "a b"
    "a c";
}
#info p span {
  margin: 0px;
}
</style>
