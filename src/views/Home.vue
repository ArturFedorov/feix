<template>
  <div class="home">
    <Start />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Start from '@/components/Start/Start.vue';
import { db } from '@/api/db';
export default Vue.extend({
  name: 'Home',
  components: {
    Start
  },
  data() {
    return {
      years: []
    };
  },
  firestore: {
    years: db.collection('years')
  }
});
</script>
