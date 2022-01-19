import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ './modules/dashboard/pages/Index.vue'),
  },
  {
    path: '/users/new',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ './modules/users/pages/UsersFormPage.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ './modules/users/pages/UsersListPage.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'hash',
});

export default router;
