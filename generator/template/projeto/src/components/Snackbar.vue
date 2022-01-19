<template>
    <div class="text-center ma-2">
      <v-snackbar
        v-model="snackbarShow"
        :timeout="timeout"
        color="blue-grey"
        left
        bottom
      >
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarClose"
          >
            X
          </v-btn>
        </template>
      </v-snackbar>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "Snackbar",
  data() {
    return {
      snackbarShow: '',
      timeout: 2000,
    };
  },
  computed: {
    ...mapState(['isAppLoading', 'toastOptions']),
  },
  watch: {
    'toastOptions.snackbar': function () {
        this.snackbarShow = this.toastOptions.snackbar;
        this.timeout = this.toastOptions.timeout;
        this.text = this.toastOptions.text;
    },
    snackbarShow() {
      if (this.snackbarShow === false) {
        this.snackbarClose();
      }
    },
  },
  methods: {
    snackbarClose() {
       this.$store.commit('toggleToast', {
         snackbar: false,
         text: '',
       });
    },
  },
};
</script>
<style lang="scss">
@import '../styles/colors';
  .v-application .blue-grey {
    background-color: $dark-blue !important;
    border-color: $dark-blue !important;
  }
</style>
