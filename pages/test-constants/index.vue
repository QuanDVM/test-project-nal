<template>
  <div>
    <div>
      <span>Text Constant:</span>
      <span>{{ textConstants }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestConstants',
  data() {
    return {
      textConstants: '',
    }
  },
  created() {
    this.textConstants = this.Constants.common.TEST
  },
})
</script>
