<template>
  <div v-show="show">
    <v-progress-circular
      indeterminate
      color="primary"
    />
    <v-overlay />
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show(mustShow) {
      document.body.style.overflow = mustShow ? 'none' : 'auto';
    },
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
  z-index: 998;
  height: 32px;
  width: 32px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
