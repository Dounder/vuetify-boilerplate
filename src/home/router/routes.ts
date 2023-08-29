import { RouteRecordRaw } from 'vue-router';

export const HomeRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'home-page' } },
  {
    path: '/home',
    name: 'home-layout',
    component: () => import('../layout/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'home-page',
        component: () => import('../pages/HomePage.vue'),
      },
    ],
  },
];
