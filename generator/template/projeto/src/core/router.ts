import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '*',
          redirect: '/home',
        },
      ],
    },
  ],
});

export default router;
