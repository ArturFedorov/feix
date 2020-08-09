<template>
  <div class="home">
    <Heading />
    <About />
    <Features />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '@/components/home/About/About.vue';
import Heading from '@/components/root/Heading/Heading.vue';
import Features from '@/components/home/Features/Features.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    About,
    Heading,
    Features
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    padding: $building-unit-x4 $building-unit-x6 0 $building-unit-x6;
    overflow-x: hidden;
  }
</style>
