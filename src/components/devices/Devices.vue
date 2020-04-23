<template>
  <div class="devices">
    <h1 class="h0 is-white-text devices-header">
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

      <div class="column columns is-vcentered devices-column">
        <h2 class="is-white-text">
          Real time data analysys and
          optimisation suggestion
        </h2>
      </div>
    </div>
    <div class="columns devices-section">
      <div class="column columns is-column is-vcentered devices-column is-left">
        <h2 class="is-white-text">
          High perfomance on mobile devices
        </h2>
      </div>

      <div class="column devices-column">
        <img
          class="devices-phone"
          src="../../assets/images/phone.png">
      </div>
    </div>
    <img
      class="devices-wave"
      src="../../assets/images/long-wave-green.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Devices'
});
</script>

<style lang="scss" scoped>
  .devices {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: $min_height*1.5;
    position: relative;
    padding: 18em 6em 2em 6em;
    background-color: $green;
    margin-top: -150px;
    z-index: 1;
    overflow-x: hidden;

    &-header {
      margin: 3em 0 3em 0;
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
    }

    &-wave {
      position: absolute;
      left: -7%;
      width: 115%;
      bottom: -20%;
      transform-origin: left center;
    }

    &-phone {
      position: absolute;
      z-index: 3;
      top: 50%;
      right: 6em;
    }
  }
</style>
