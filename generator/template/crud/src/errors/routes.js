const routes = [];

routes.push({
  path: '/error-examples',
  name: 'ErrorExamples',
  component: () => import(/* webpackChunkName: "errors" */ './screens/ErrorExamples.vue'),
  meta: {
    requiresAuth: true,
  },
});

export default routes;
