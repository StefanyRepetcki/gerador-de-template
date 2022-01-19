import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/exemploDeRota',
    name: 'exemploDeRota',
    component: () => import('../ExemploDeRota.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'hash',
});

export default router;
