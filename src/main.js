import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import qs from "qs";

import router from "./router";

const axiosInst = axios.create();

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axiosInst.defaults.paramsSerializer = params => {
  return qs.stringify(params);
};

axiosInst.defaults.transformRequest = [
  function(data) {
    return qs.stringify(data);
  }
];

Vue.prototype.$axios = axiosInst;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
