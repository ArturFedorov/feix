<template>
  <div class="advantages section">
    <div class="advantages-content">
      <h1 class="h0 is-purple-text advantages-header">
        Our key advantages
      </h1>
      <div class="advantages-features">
        <TextLabel
          class="advantages-features-item">
          <template slot="index">
            01
          </template>
          <template slot="text">
            Our system represents dynamics of
            people migration in the city over the day
            in a form of heat map in near real-time.
            Also it applies quite high
            requirements on a processing host.
          </template>
        </TextLabel>

        <TextLabel
          class="advantages-features-item">
          <template slot="index">
            02
          </template>
          <template slot="text">
            For that kind of system selection and data
            computation directly from the storage is a
            major bottleneck.
          </template>
        </TextLabel>

        <TextLabel
          class="advantages-features-item">
          <template slot="index">
            03
          </template>
          <template slot="text">
            Usage of data streaming services pattern
            allows to scale seamlessly, execute workload
            in parallel and restructure work flow easily
            to achieve required results.
          </template>
        </TextLabel>
      </div>
    </div>
    <img
      class="advantages-image"
      src="../../assets/images/long-wave.svg" alt="wave">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'Advantages',
  props: {
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted(): void {
    AnimationService.timeLine().set('.advantages-image', {
      opacity: 0,
      y: 100
    }).set('.advantages-features-item', {
      opacity: 0,
      y: 40
    }).set('.advantages-header', {
      opacity: 0,
      y: 50
    });
  },
  methods: {
    toggleAnimation () {
      AnimationService.timeLine()
        .to('.advantages-header', {
          delay: 0.5,
          opacity: 1,
          y: 0
        })
        .to('.advantages-features-item', {
          duration: 1.5,
          opacity: 1,
          y: 0,
          stagger: 0.3
        }).to('.advantages-image', {
          duration: 1,
          opacity: 1,
          y: 0
        })
    }
  },
  watch: {
    startAnimation(newValue: boolean) {
      if(newValue) {
        this.toggleAnimation();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .advantages {
    flex-direction: column;
    justify-content: center;
    z-index: 2;

    &-header {
      margin-bottom: 4em;
    }

    &-features {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6em;

      @media ($mobile) {
        flex-direction: column;
      }

      &-item {
        flex: 1;
        max-width: 25%;

        @media ($mobile) {
          max-width: 100%;
          margin-bottom: 5em;
        }
      }
    }

    &-image {
      position: absolute;
      left: -7%;
      width: 115%;
      bottom: 0;
      transform-origin: left center;
    }
  }
</style>
