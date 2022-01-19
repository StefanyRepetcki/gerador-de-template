import Index from './pages/UsersListPage.vue';
import Form from './pages/UsersFormPage.vue';

export default [
  {
    path: '/users',
    name: 'Usuários',
    component: Index,
  },
  {
    path: '/users/new',
    name: 'Novos Usuários',
    component: Form,
  },
  {
    path: '/users/:id',
    name: 'Edição Usuários',
    component: Form,
  },
];
