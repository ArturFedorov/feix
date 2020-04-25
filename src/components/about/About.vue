<template>
  <div class="about columns section">
    <div class="column about-column">
      <Dots
        :startAnimation.sync="startAnimation"
        class="about-image"/>
    </div>
    <div class="column columns is-column is-vcentered">
      <div>
        <div class="about-heading animation">
          <h1 class="h0 is-purple-text">
            Feix anylize
          </h1>
          <h1 class="h0 is-purple-text">
            and optimize
          </h1>
        </div>
        <p class="about-text is-light is-purple-text animation">
          Our system represents dynamics of people migration in the city
          over the day in a form of heat map in near real-time.
          Also it applies quite high requirements on a processing host.
        </p>
        <a class="is-purple-text animation">
          Explore application
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Dots from '@/components/about/Dots/Dots.vue';
import {AnimationService} from '@/shared/services/AnimationService';
export default Vue.extend({
  name: 'About',
  components: {
    Dots
  },
  props: {
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted(): void {
    AnimationService.gsap.set('.animation', {
      opacity: 0,
      scaleY: 0.9,
      y: 20
    })

    if(this.startAnimation) {
      this.toggleTextAnimationText(1, 0);
    }
  },
  methods: {
    toggleTextAnimationText(opacity: number, y: number) {
      AnimationService.gsap.to('.animation', {
        duration: 1,
        delay: 1.5,
        opacity,
        y,
        stagger: -0.5,
        ease: AnimationService.easing.power1.easeInOut
      })
    }
  },
  watch: {
    startAnimation(newValue: boolean) {
      if(newValue) {
        this.toggleTextAnimationText(1, 0);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .about {
    padding-top: 6em;

    &-column {
      position: relative;
    }

    &-heading {
      margin-bottom: 4em;
    }

    &-text {
      margin-bottom: 4em;
      max-width: 70%;

      @media ($mobile) {
        max-width: 100%;
      }
    }

    &-image {
      position: absolute;
      max-width: 100%;
      left: -15%;

      @media ($desktop) {
        left: -20%;
      }
    }
  }
</style>
