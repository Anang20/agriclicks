import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
];

export default routes;