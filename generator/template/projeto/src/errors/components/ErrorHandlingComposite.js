import * as ErrorService from '../error.service';
import ErrorConstants from '../errors.constants';

export default {
  methods: {
    handleError({ data }, errorMap) {
      const toastList = ErrorService
        .extractErrorIdentifiers(data)
        .map(errorId => ({
          text: errorMap[errorId] || ErrorConstants.UNEXPECTED_ERROR_TEXT,
          snackbar: true,
          timeout: 2000,
        }));

      this.$store.dispatch('showMultipleToasts', toastList);
    },
  },
};
