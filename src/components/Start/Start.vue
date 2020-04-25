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
        <Logo class="start-logo last" />
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
      .from('.start-heading h1', {
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

    @media ($mobile) {
      padding: 0 2em 2em 2em;
      justify-content: center;
    }

    &-heading {
      @media ($mobile) {
        margin: 4em 0 3em 0;

        .h0 {
          font-size: $font-size-h3;
        }
      }
    }


    &-caption {
      margin-top: auto;

      @media ($desktop) {
        font-size: $font-size-h4;
      }

      @media ($mobile) {
        display: none;
      }
    }

    &-column {
      position: relative;
      display: flex;

      &.is-right {
        justify-content: space-between;

        @media ($mobile) {
          margin-top: auto;
        }
      }

      &.is-left {
        @media ($mobile) {
          position: absolute;
          top: 0;
          height: 50%;
        }
      }
    }

    &-image {
      position: absolute;
      left: -25%;
      top: -15%;
      max-width: 100%;
      z-index: -1;

      @media ($desktop) {
        top: -10%;
        left: -30%;
      }

      @media ($mobile) {
        height: auto;
      }
    }

    &-logo {
      margin-left: auto;

      @media ($mobile) {
        margin-left: 0;
      }
    }
  }

  .last {
    transform-origin: center center;
  }
</style>
