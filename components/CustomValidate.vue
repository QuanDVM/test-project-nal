<template>
  <div class="custom-validate">
    <slot />
    <the-text-field
      class="custom-validate__input"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CustomValidate',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/custom-validate.scss';
</style>
