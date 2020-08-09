<template>
  <div class="features">
    <img src="../../../assets/images/features.svg" alt="features" class="features-item">
    <img src="../../../assets/images/maschiene_learning.svg" alt="maschiene_learning" class="features-item">
    <img src="../../../assets/images/visualization.svg" alt="visualization" class="features-item">
    <img src="../../../assets/images/big_data.svg" alt="big_data" class="features-item">
    <img src="../../../assets/images/artificial.svg" alt="artificial" class="features-item">
    <img src="../../../assets/images/outcomes.svg" alt="outcomes" class="features-item">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/AnimationService';

export default Vue.extend({
  name: 'Features',
  mounted() {
    AnimationService.timeLine()
      .from('.features-item', {
        duration: 1.2,
        stagger: 0.2,
        scaleX: 1.3,
        x: 800,
        opacity: 0
      })
  }
});
</script>

<style lang="scss" scoped>
  .features {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $building-unit-x4 0;
    height: 1162px;
    margin-bottom: 400px;

    &-item {
      &:not(:last-child) {
        margin-right: $building_unit;
      }
    }
  }
</style>
