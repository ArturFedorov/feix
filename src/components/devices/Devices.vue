<template>
  <div class="devices section">
    <h1 class="h0 is-white-text devices-header header-animate">
      Runs on every device
    </h1>
    <div class="columns devices-section">
      <div class="column devices-column">
        <div class="devices-image">
          <img
            class="devices-laptop"
            src="../../assets/images/laptop.png" alt="laptop">
        </div>
      </div>

      <div class="column devices-column">
        <h2 class="is-white-text devices-subheader header-animate">
          Real time data analysis and
        </h2>
        <h2 class="is-white-text header-animate">
          optimisation suggestion
        </h2>
      </div>
    </div>
    <div class="columns devices-section">
      <div class="column columns is-column is-vcentered devices-column is-left">
        <h2 class="is-white-text header-animate">
          High perfomance on mobile devices
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'Devices',
  props: {
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted(): void {
    AnimationService.timeLine()
      .set('.devices', {
        backgroundColor: '#ffffff'
      })
      .set('.devices-laptop', {
        opacity: 0,
        x: -100
      })
      .set('.header-animate', {
        opacity: 0,
        y: 100
      });

    if(this.startAnimation) {
      this.startScreenAnimation();
    }
  },
  methods: {
    startScreenAnimation() {
      AnimationService.timeLine({
        duration: 1.5,
        ease: AnimationService.easing.power1.easeInOut
      })
        .to('.devices', {
          delay: 0.5,
          backgroundColor: '#2CBFBF'
        })
        .to('.header-animate', {
          y: 0,
          opacity: 1,
          stagger: 0.2
        })
        .to('.devices-laptop', {
          delay: -1,
          opacity: 1,
          x: 0
        })
    }
  },
  watch: {
    startAnimation(newValue: boolean) {
      if(newValue) {
        this.startScreenAnimation();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .devices {
    flex-direction: column;
    background-color: $green;
    margin-top: -150px;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 18em;
    height: $min_height*1.5;

    @media ($mobile) {
      margin-top: -50px;
      padding-top: 5em;
      min-height: $min_height;
      height: $min_height;
    }

    &-header {
      margin: 3em 0 3em 0;
    }

    &-subheader {
      margin-top: 3em;
    }

    &-column {
      height: 100%;
      position: relative;

      &.is-left {
        align-items: flex-start;
      }
    }

    &-section {
      height: 100%;
      flex: 1;
    }

    &-image {
      position: relative;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    &-laptop {
      top: 50%;
      position: absolute;
      left: -6em;
      width: 100%;

      @media ($mobile) {
        left: -2em;
      }
    }
  }
</style>
