<template>
  <div class="contact">
    <h1 class="h0 is-purple-text contact-header">
      Contact us
    </h1>
    <div class="columns">
      <TextLabel
        class="contact-item">
        <template slot="index">
          Feix
        </template>
        <template slot="text">
          Feix Gmbh. Russia, Saint-Petersburg<br/>
          V.O. 13th linia 14b , 190000
        </template>
      </TextLabel>

      <TextLabel
        class="contact-item">
        <template slot="index">
          Contact
        </template>
        <template slot="text">
          feix@t-systems.com <br/>
          + 7 9323 233 23
        </template>
      </TextLabel>

      <TextLabel
        class="contact-item">
        <template slot="index">
          Partners
        </template>
        <template slot="text">
          Powered  by Cheeta
        </template>
      </TextLabel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact'
});
</script>

<style lang="scss" scoped>
  .contact {
    position: relative;
    height: 100vh;
    padding: 6em 6em 2em 6em;
    min-height: $min_height;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-header {
      margin-bottom: 4em;
    }

    &-item {
      flex: 1;
    }
  }
</style>
