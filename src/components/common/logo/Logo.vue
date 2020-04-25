<template>
  <div class="logo">
    <img
      class="start-logo"
      src="../../../assets/logo.svg" alt="logo">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Logo'
});
</script>

<style lang="scss" scoped>
  .logo {
    width: 140px;

    @media ($desktop) {
      width: 100px;
    }

    @media ($mobile) {
      width: 50px;
    }
  }
</style>
