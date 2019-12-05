module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.devServer = {
      proxy: {
        "/songs": {
          //在ajax请问的url参数前 加上'/API'就行了，此时的'/API'就是 'https://www.easy-mock.com'的变量。
          target: "https://krasewallet.top/",
          ws: true,
          changeOrigin: true
          // pathRewrite: {
          //   "^/API": ""
          // }
        }
      }
    };
  }
};
