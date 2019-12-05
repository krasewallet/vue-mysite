import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/index.vue";
import tools from "../components/tools/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "home"
      }
    },
    {
      path: "home",
      name: "home",
      component: home
    },
    {
      path: "tools",
      name: "tools",
      component: tools
    }
  ]
});
