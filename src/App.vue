<template>
  <div
    id="app"
    class="app"
    :class="{'is-blended': sideNavigationOpened}">
    <Header />
    <div
      class="app-content"
      ref="app">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/root/Header/Header.vue';
import {navigationMixin} from '@/components/common/mixins/navigation.mixin';
import SmoothScrollbar from 'smooth-scrollbar';

export default Vue.extend({
  name: 'App',
  mixins: [navigationMixin],
  components: {
    Header
  },
  mounted() {
    SmoothScrollbar.init(this.$refs.app as HTMLElement, {
      damping: 0.03,
      thumbMinSize: 15,
    });
  }
});
</script>
<style lang="scss">
  .app {
    background-color: $white;
    transition: $transition-default;

    &-content {
      padding-top: $header-height;
      height: 100vh;
    }

    &.is-blended {
      background-color: $pinkish;
    }
  }
</style>
