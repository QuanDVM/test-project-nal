<template>
  <div>
    <div>
      <span>Text:</span>
      <span>{{ text }}</span>
    </div>
    <div>
      <span>Text camel case:</span>
      <span>{{ textCamelCase }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestLodash',
  data() {
    return {
      text: 'Hello word',
      textCamelCase: '',
    }
  },
  created() {
    this.textCamelCase = this.$_.camelCase(this.text)
  },
})
</script>
