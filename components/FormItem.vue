<template>
  <div :class="['form-item', { 'form-item--col': col }]">
    <div
      :class="[
        'form-item__label',
        { 'form-item__label--spacing': labelSpacing },
      ]"
    >
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
      <span v-if="required" class="tw-text-primary">{{
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

    labelSpacing: Boolean,

    col: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/form-item.scss';
</style>
