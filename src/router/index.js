import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("@/views/introduction.vue")
    },
    {
      path: "/quick-start",
      component: () => import("@/views/quickStart.vue")
    },
    {
      path:"/essentials/application",
      component:()=>import("@/views/essentials/applications.vue")
    }
  ]
});

export default router;
