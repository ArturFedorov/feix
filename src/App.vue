<template>
  <div id="app">
    <div class="main">
      <div class="main-left grid-left">

      </div>
      <div class="main-content grid-main">
        <router-view />
      </div>
      <div class="main-actions grid-right">

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'App'
});
</script>
<style lang="scss">
  .main {
    &-content {
    }

    &-actions {
    }
  }
</style>
