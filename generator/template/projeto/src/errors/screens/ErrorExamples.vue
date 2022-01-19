<template>
  <div class="screen-container" />
</template>

<script>
import { users } from '@/webApi';
import { errorHandlingComposite } from '../index';
import * as ErrorService from '../error.service';

export default {
  name: 'ErrorExamples',
  async created() {
    users.get('/exception/echo/erro-inexperado');

    try {
      await users.get('/exception/echo/erro-negocial');
    } catch (error) {
      this.handleError(error.response, ErrorService.errorMap);
    }
  },
  methods: {
    handleError: errorHandlingComposite.methods.handleError,
  },
};
</script>

<style lang="scss" scoped>
.screen-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  padding: 16px;
}
</style>
