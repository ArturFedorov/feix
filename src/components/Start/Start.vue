<template>
  <div class="start columns">
    <div class="column start-column is-left">
      <Spiral class="start-image"/>
        <h3 class="start-caption is-light is-purple-text last">
          We optimize your comfort
        </h3>
    </div>
    <div class="column start-column is-right columns is-column">
      <div></div>
      <div class="start-heading">
        <h1 class="h0 is-purple-text">
          Infinite possibilities
        </h1>
        <h1 class="h0 is-purple-text">
          to optimize our life
        </h1>
      </div>
      <div class="columns">
        <img
          class="start-logo last"
          src="../../assets/logo.svg" alt="logo">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Spiral from '@/components/Start/Spiral/Spiral.vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'Start',
  components: {
    Spiral
  },
  mounted(): void {
    AnimationService.timeLine()
      .from('h1', {
        delay: 1.5,
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.5,
        ease: AnimationService.easing.power1.easeOut
      }).from('.last', {
        duration: 1.5,
        opacity: 0,
        scale: 0.5
      })
  }
});
</script>

<style lang="scss" scoped>
  .start {
    height: 100vh;
    padding: 0 6em 2em 6em;

    &-heading {

    }

    &-caption {
      margin-top: auto;
    }

    &-column {
      position: relative;
      display: flex;

      &.is-right {
        justify-content: space-between;
      }
    }

    &-image {
      position: absolute;
      left: -25%;
      top: -15%;
      max-width: 100%;
      z-index: -1;
    }

    &-logo {
      width: 140px;
      margin-left: auto;
    }
  }

  .last {
    transform-origin: center center;
  }
</style>
