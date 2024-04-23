import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/dashboard/index.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users/index.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/users/add",
    name: "user add",
    component: () => import("@/views/users/add.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
];

export default routes;
