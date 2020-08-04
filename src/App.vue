<template>
  <div
    id="app"
    class="app"
    :class="{'is-blended': sideNavigationOpened}">
    <Header />
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/root/Header/Header.vue';
import {navigationMixin} from '@/components/common/navigation.mixin';

export default Vue.extend({
  name: 'App',
  mixins: [navigationMixin],
  components: {
    Header
  }
});
</script>
<style lang="scss">
  .app {
    height: 100vh;
    background-color: $white;
    transition: $transition-default;

    &-content {
      padding-top: $header-height;
    }

    &.is-blended {
      background-color: $pinkish;
    }
  }
</style>
