<template>
  <div class="navigation">
    <a
      class="navigation-trigger"
      @click="toggleSideNavigation">
      <h3>menu</h3>
      <SvgIcon
        class="navigation-icon"
        name="menu_icon"/>
    </a>
    <div
      class="navigation-content"
      :class="{'is-opened': sideNavigationOpened}">
        1223
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {navigationMixin} from '@/components/common/navigation.mixin';

export default Vue.extend({
  name: 'Navigation',
  mixins: [navigationMixin]
});
</script>

<style lang="scss" scoped>
  $content-width: 765px;

  .navigation {
    display: flex;
    align-items: center;
    position: relative;

    &-content {
      display: flex;
      background-color: $white;
      width: 10px;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      transition: all 0.7s ease-in-out;
      transform: translate(100%, 0);

      &.is-opened {
        transform: translate(0%, 0);
        padding: 0 $building-unit-x8;
        width: $content-width;
      }
    }

    &-icon {
      stroke: $black;
      margin-left: $building_unit;
    }

    &-trigger {
      display: flex;
      cursor: pointer;
      align-items: center;
    }
  }
</style>
