<template>
  <v-radio
    v-model="bindingData"
    :class="['the-radio', `the-radio--position-${position}`]"
    hide-details="auto"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
      ><slot :name="name" v-bind="slotData"
    /></template>
  </v-radio>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheRadio',

  props: {
    value: {
      type: [String, Number, Boolean],
      required: false,
      default: () => '',
    },

    position: {
      type: String,
      required: false,
      default: () => 'center',
    },
  },

  computed: {
    bindingData: {
      get(): string | number | boolean {
        return this.value
      },

      set(val: string | number | boolean) {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-radio.scss';
</style>
