import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/HalamanSatu")
    },
    {
      path: "/halaman-dua",
      component: () => import("./pages/HalamanDua")
    },
    {
      path: "/halaman-tiga",
      component: () => import("./pages/HalamanTiga")
    }
  ]
});

export default Router;
