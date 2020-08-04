import Vue from 'vue';
import {
  TOGGLE_SIDE_NAVIGATION,
  SIDE_NAVIGATION_OPENED
} from '@/store/ui';

export const navigationMixin = Vue.extend({
  computed: {
    sideNavigationOpened(): boolean {
      return this.$store.getters[SIDE_NAVIGATION_OPENED];
    }
  },
  methods: {
    toggleSideNavigation(): void {
      this.$store.commit(TOGGLE_SIDE_NAVIGATION, !this.sideNavigationOpened);
    }
  }
});
