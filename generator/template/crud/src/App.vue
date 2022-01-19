<template>
  <v-app id="app">
    <v-main class="pa-12">
      <router-view />
    </v-main>
    <LoadingScreen :show="isAppLoading" />
    <Snackbar
      ref="toast"
      class="snackbar"
    />
  </v-app>
</template>
<script>
import { mapState } from 'vuex';
import LoadingScreen from './components/LoadingScreen.vue';
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',
  components: {
    LoadingScreen,
    Snackbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['isAppLoading']),
  },
};
</script>
<style lang="scss">
  #app {
    // background-color: $black;
  }
  .switch-dark {
    position: absolute;
    top: 3rem;
    left: 2rem;
  }
</style>
