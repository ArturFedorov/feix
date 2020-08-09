<template>
  <div
    class="header"
    :class="{'is-blended': sideNavigationOpened}">
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
import {navigationMixin} from '@/components/common/mixins/navigation.mixin';

export default Vue.extend({
  name: 'Header',
  mixins: [navigationMixin],
  components: {
    Navigation
  }
});
</script>

<style lang="scss" scoped>

  .header {
    display: flex;
    background-color: $white;
    justify-content: space-between;
    padding: $building-unit-x6;
    position: absolute;
    left: 0;
    right: 0;
    z-index: $z-index-top;
    transition: all 0.5s;

    &-image {
      width: 100px;
    }

    &.is-blended {
      background-color: $pinkish;
    }
  }
</style>
