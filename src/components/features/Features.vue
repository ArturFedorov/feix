<template>
  <div class="features section">
    <div class="features-images is-right">
      <img src="../../assets/images/wave-right.png" alt="wave-left">
    </div>

    <div class="features-content">
      <TextLabel
        class="features-content-item"
        v-for="(feature, index) in features"
        :key="feature.text">
        <template slot="index">
          {{ index + 1 | leadingZero }}
        </template>
        <template slot="text">
          {{feature.text}}
        </template>
      </TextLabel>
    </div>


    <div class="features-images is-left">
      <img src="../../assets/images/wave-left.png" alt="wave-left">
    </div>
    <Logo
      class="features-logo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'Features',
  props: {
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      features: [
        { text: 'Big data analysis' },
        { text: 'Maschine learning' },
        { text: 'Statistic optimization' },
        { text: 'Data visualization' },
        { text: 'Behaviour analysis' },
        { text: 'Real-time tracking' },
        { text: 'Decision assistance' }
      ]
    }
  },
  mounted(): void {
    AnimationService.timeLine().set('.features-images', {
      opacity: 0,
      scale: 0.5
    }).set('.features-content-item', {
      opacity: 0,
      y: 40
    }).set('.features-logo', {
      opacity: 0,
      scaleY: 0.5
    });

    if(this.startAnimation) {
      this.toggleAnimation();
    }
  },
  methods: {
    toggleAnimation () {
      AnimationService.timeLine()
        .to('.features-images', {
          duration: 1,
          opacity: 1,
          scale: 1,
          stagger: 0.3
        })
        .to('.features-content-item', {
          duration: 1.5,
          opacity: 1,
          y: 0,
          stagger: 0.3
        }).to('.features-logo', {
          opacity: 1,
          scaleY: 1
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
  .features {
    align-items: center;

    &-content {
      display: flex;
      width: 100%;
      flex-wrap: wrap;

      &-item {
        min-width: 25%;
        margin-bottom: 10em;

        @media ($mobile) {
          margin-bottom: 5em;
          width: 50%;
        }
      }
    }

    &-images {
      position: absolute;
      transform-origin: right center;

      @media ($mobile) {
        max-width: 70%;
      }

      &.is-left {
        bottom: 0;
        left: 0;
        transform-origin: left center;

        @media ($mobile) {
          left: -60%;
        }
      }

      &.is-right {
        right: 0;
        top: 0;
      }
    }

    &-logo {
      position: absolute;
      bottom: 6em;
      right: 6em;

      @media ($mobile) {
        right: 2em;
        bottom: 2em;
      }
    }
  }
</style>
