<template>
  <div class="container">
    <h3>Exemplo de Dashboard</h3>
    <router-link to="/users">
      Usuários
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
  mounted() {
    this.$store.commit('toggleToast', {
      snackbar: true,
      text: 'Exemplo de texto',
      timeout: 2000,
    });
  },
};
</script>
