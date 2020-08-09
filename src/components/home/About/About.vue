<template>
  <div class="about">
    <div class="about-text">
      <h2>
        Feix represents dynamics of
        people migration in the city
        over the day in a form of heat
        map in real-time.
      </h2>
    </div>
    <div class="about-background">
      <Background />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Background from '@/components/home/About/Background.vue';

export default Vue.extend({
  name: 'About',
  components: {
    Background
  }
});
</script>

<style lang="scss" scoped>
  .about {
    display: flex;
    position: relative;
    align-items: center;
    height: 1162px;
    padding: $building-unit-x4 $building-unit-x6;

    &-background {
      position: absolute;
      top: 0;
      right: -$building-unit-x6;
    }

    &-text {
      max-width: 50%;
    }
  }
</style>
