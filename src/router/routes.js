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
  {
    path: '/users/detail/:id',
    name: 'user detail',
    component: () => import('@/views/users/detail.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: '/users/edit/:id',
    name: 'user edit',
    component: () => import('@/views/users/edit.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: '/produksi',
    name: 'produksi',
    component: () => import('@/views/produksi/index.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: '/produksi/add',
    name: 'produksi add',
    component: () => import('@/views/produksi/add.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: '/produksi/detail/:id',
    name: 'produksi detail',
    component: () => import('@/views/produksi/detail.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
];

export default routes;
