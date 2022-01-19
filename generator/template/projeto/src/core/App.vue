<template>
  <div id="app">
    <AppShell />

    <main
      class="main-container"
    >
      <ToolbarOnboarding
        v-if="getLoginData"
      />

      <router-view class="view-container" />
    </main>

    <GlobalErrorHandler />

    <Snackbar
      ref="toast"
      class="snackbar"
    />

    <LoadingScreen :show="isAppLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import LoadingScreen from '../components/LoadingScreen.vue';
import AppShell from './components/AppShell.vue';
import Snackbar from '../components/Snackbar.vue';

export default {
  name: 'App',
  components: {
    AppShell,
    Snackbar,
    LoadingScreen,
  },
  computed: {
    ...mapState(['isAppLoading', 'toastOptions', 'toastOptionsList']),
    ...mapGetters('auth', ['isAuthenticated', 'getLoginData']),
  },
  watch: {
    isAuthenticated(newValue) {
      if (newValue === true) {
        this.loadShellData();
        this.initZendeskWidget();
      }
    },
    toastOptions(newToast) {
      if (!newToast) {
        return;
      }
      if (newToast.show === false) {
        this.$refs.toast.close({ id: 'snackbar' });
      } else {
        this.$refs.toast.show({
          id: 'snackbar',
          ...newToast,
        });
      }
      this.$store.commit('toggleToast', null);
    },
    toastOptionsList(newList) {
      if (!newList) {
        return;
      }

      newList.forEach((toast, index) => {
        this.$refs.toast.show({
          id: index,
          ...toast,
        });
      });

      this.$store.dispatch('showMultipleToasts', null);
    },
  },
  created() {
    this.$router.onReady(() => {
      if (this.$route.name !== 'Login') {
        // se estiver na rota de login, obter token do backend
        // senao usar o que estiver salvo no navegador, independente de ter
        this.$store.dispatch('loadStoredData');
      }
    });
  },
  methods: {
    ...mapActions([
      'loadShellData',
    ]),
    handleModalNotifications(toastOptions) {
      this.$store.commit('toggleToast', toastOptions);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Lato', Helvetica, Arial;
  color: $black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  outline: none;
}

#app {
  min-height: 100%;
  padding-bottom: 68px;
  background-color: var(--light-neutral);
}

.main-container {
  display: flex;
  margin-top: 64px;
  min-height: 100%;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-left: 64px;
  }
}

@media (--tablet) {
  .snackbar {
    margin-bottom: 30px;
    margin-left: 80px;
  }
}
</style>
