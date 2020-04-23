<template>
  <div class="home">
    <Start class="home-start" />
    <IntersectionObserver
      :rootMargin="rootMargin"
      @enter="elementEnter('about')"
      @leave="elementLeave('about')">
      <About
        class="home-about"
        :startAnimation="animationMap['about']"/>
    </IntersectionObserver>
    <IntersectionObserver
      :rootMargin="rootMargin"
      @enter="elementEnter('features')"
      @leave="elementLeave('features')">
      <Features
        class="home-features"
        :startAnimation="animationMap['features']"/>
    </IntersectionObserver>
    <IntersectionObserver
      :rootMargin="rootMargin"
      @enter="elementEnter('advantages')"
      @leave="elementLeave('advantages')">
      <Advantages
        class="home-advantages"
        :startAnimation="animationMap['advantages']"/>
    </IntersectionObserver>
    <IntersectionObserver
      :rootMargin="rootMargin"
      @enter="elementEnter('devices')"
      @leave="elementLeave('devices')">
      <Devices
        class="home-advantages"
        :startAnimation="animationMap['devices']"/>
    </IntersectionObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '@/components/common/About/About.vue';
import Advantages from '@/components/advantages/Advantages.vue';
import Devices from '@/components/devices/Devices.vue';
import Features from '@/components/features/Features.vue';
import Start from '@/components/Start/Start.vue';
export default Vue.extend({
  name: 'Home',
  components: {
    Advantages,
    Devices,
    Features,
    Start,
    About
  },
  data() {
    return {
      years: [],
      rootMargin: '-100px',
      startAnimation: false,
      animationMap: {
        'about': false,
        'features': false,
        'advantages': false,
        'devices': false
      } as { [key: string]: boolean }
    };
  },
  methods: {
    elementEnter(key: string) {
      this.animationMap[key] = true;
    },
    elementLeave(key: string) {
      this.animationMap[key] = false;
    }
  }
});
</script>
