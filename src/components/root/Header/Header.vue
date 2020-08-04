<template>
  <div class="header">
    <router-link
      to="/">
      <img
        class="header-image"
        src="../../../assets/images/logo.svg"
        alt="logo">
    </router-link>
    <Navigation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/root/Navigation/Navigation.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Navigation
  }
});
</script>

<style lang="scss" scoped>

  .header {
    display: flex;
    justify-content: space-between;
    padding: $building-unit-x6;
    position: absolute;
    left: 0;
    right: 0;

    &-image {
      width: 100px;
    }
  }
</style>
