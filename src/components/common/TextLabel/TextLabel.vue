<template>
  <div class="text-label">
    <h1 class="h0 is-purple-text text-label-header">
      <slot name="index">01</slot>
    </h1>
    <p class="is-light is-purple-text text-label-text">
      <slot name="text">
        Big data analysis
      </slot>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TextLabel'
});
</script>

<style lang="scss" scoped>

</style>
