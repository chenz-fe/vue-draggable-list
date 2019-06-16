import Vue from "vue";
import Router from "vue-router";
import layout from "./components/layout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "/",
          name: "drag-demo",
          component: () => import("@/views/Drag.vue")
        }
      ]
    }
  ]
});
