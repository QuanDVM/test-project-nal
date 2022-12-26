<template>
  <div class="form-item">
    <div class="form-item__label">
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
      <span v-if="required" class="text-primary">{{
        $t('common.asterisk')
      }}</span>
    </div>
    <div class="form-item__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormItem',

  props: {
    label: {
      type: String,
      required: false,
      default: () => '',
    },

    required: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/form-item.scss';
</style>
