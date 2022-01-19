import { users } from '@/webApi';
import { mapGetters } from 'vuex';
import ErrorsConstants from '../errors.constants';

export default {
  name: 'GlobalErrorHandler',

  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'getLoginData']),
  },

  created() {
    users.interceptors.response.use(undefined, this.errorResponse);

    if (this.isAuthenticated) {
      this.identifyUserOnMonitoring();
    }
  },

  watch: {
    isAuthenticated(newValue) {
      if (!newValue) {
        return;
      }

      this.identifyUserOnMonitoring();
    },
  },

  methods: {
    errorResponse(err) {
      if (
        !err.response
        || err.response.status !== ErrorsConstants.CUSTOM_UNEXPECTED_ERROR_CODE
      ) {
        return Promise.reject(err);
      }

      this.$store.commit('toggleToast', {
        text: `${ErrorsConstants.UNEXPECTED_ERROR_TEXT} Código: ${err.response.data.identificador}`,
        snackbar: true,
        timeout: 2000,
      });

      return Promise.reject(err);
    },
  },
  render() {
    return null;
  },
};
