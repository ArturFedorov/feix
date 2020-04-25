<template>
  <div class="columns layers section">
    <div class="column layers-column">
      <div></div>
      <div>
        <div class="layers-heading">
          <h1 class="h0 is-purple-text animation-text">
            Layered data
          </h1>
          <h1 class="h0 is-purple-text animation-text">
            visualization on map
          </h1>
        </div>
        <p class="layers-text is-light is-purple-text animation-text">
          Data is vusualized on heat map. Concentration of people visualized with different color schemes.
          Our system represents dynamics of people migration in the city over the day in a form of heat
          map in near real-time. Also it applies quite high requirements on a processing host.
        </p>
        <a class="is-purple-text animation-text">
          Explore application
        </a>
      </div>
      <Logo class="layers-logo animation-image" />
    </div>
    <div class="column layers-column">
      <img
        class="layers-image animation-image"
        src="../../assets/images/layers.png" alt="layers">
    </div>
    <img
      class="layers-wave"
      src="../../assets/images/long-wave-green.svg">
    <img
      class="layers-phone animation-image"
      src="../../assets/images/phone.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'Layers',
  props: {
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted(): void {
    AnimationService.timeLine()
      .set('.animation-image, .animation-text', {
        opacity: 0,
        y: 100,
        scaleY: 0.9
      })

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
        .to('.animation-image', {
          delay: 0.5,
          opacity: 1,
          y: 0,
          scaleY: 1,
          stagger: -0.2,
        })
        .to('.animation-text', {
          delay: -1,
          opacity: 1,
          y: 0,
          scaleY: 1,
          stagger: 0.5,
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
  .layers {
    padding-top: 6em;

    @media ($mobile) {
      min-height: 1000px;
    }

    &-heading {
      margin-bottom: 4em;

      @media ($mobile) {
        margin-top: 6em;
      }
    }

    &-column {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-image {
      top: 50%;
      position: absolute;
      right: -6em;
      max-width: 100%;
    }

    &-text {
      margin-bottom: 4em;
      max-width: 70%;

      @media ($mobile) {
        max-width: 100%;
      }
    }


    &-wave {
      position: absolute;
      left: -7%;
      width: 115%;
      top: -15%;
      z-index: 2;
      transform-origin: left center;

      @media ($mobile) {
        top: -3%;
      }
    }

    &-phone {
      position: absolute;
      top: -40%;
      right: 6em;
      z-index: 3;
      transform-origin: top center;

      @media ($mobile) {
        max-width: 50%;
        top: -20%;
        right: 2em;
      }
    }

    &-logo {
      @media ($mobile) {
        margin-top: 4em;
      }
    }
  }

</style>
