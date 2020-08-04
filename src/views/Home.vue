<template>
  <div class="home">
    <Heading />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from '@/components/root/Heading/Heading.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Heading
  }
});
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    padding: 0 $building-unit-x6;
    overflow-x: hidden;
  }
</style>
