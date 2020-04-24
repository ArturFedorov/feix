<template>
  <div class="columns layers">
    <div class="column layers-column">
      <div></div>
      <div>
        <div class="layers-heading">
          <h1 class="h0 is-purple-text">
            Layered data
          </h1>
          <h1 class="h0 is-purple-text">
            visualization on map
          </h1>
        </div>
        <p class="layers-text is-light is-purple-text">
          Data is vusualized on heat map. Concentration of people visualized with different color schemes.
          Our system represents dynamics of people migration in the city over the day in a form of heat
          map in near real-time. Also it applies quite high requirements on a processing host.
        </p>
        <a class="is-purple-text">
          Explore application
        </a>
      </div>
      <img
        class="layers-logo"
        src="../../assets/logo.svg" alt="logo">
    </div>
    <div class="column layers-column">
      <img
        class="layers-image"
        src="../../assets/images/layers.png" alt="layers">
    </div>
    <img
      class="layers-wave"
      src="../../assets/images/long-wave-green.svg">
    <img
      class="layers-phone"
      src="../../assets/images/phone.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Layers'
});
</script>

<style lang="scss" scoped>
  .layers {
    height: 100vh;
    padding: 6em 6em 2em 6em;
    min-height: $min_height;
    position: relative;

    &-heading {
      margin-bottom: 4em;

      @media ($desktop) {
        .h0 {
          font-size: $font-size-h1;
        }
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
    }

    &-logo {
      width: 140px;

      @media ($desktop) {
        width: 100px;
      }
    }

    &-wave {
      position: absolute;
      left: -7%;
      width: 115%;
      top: -15%;
      z-index: 2;
      transform-origin: left center;
    }

    &-phone {
      position: absolute;
      top: -40%;
      right: 6em;
      z-index: 3;
    }
  }

</style>
