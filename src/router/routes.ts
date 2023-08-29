import { RouteRecordRaw } from 'vue-router';
import { HomeRoutes } from './../home';

const routes: RouteRecordRaw[] = [
  ...HomeRoutes,
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/common/pages/NotFound.vue'),
  },
];

export default routes;
