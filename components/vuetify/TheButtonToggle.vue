<template>
  <v-btn-toggle
    v-bind="$attrs"
    v-model="bindingData"
    class="the-button-toggle"
    mandatory
    hide-details="auto"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-btn-toggle>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheButtonToggle',

  props: {
    value: {
      type: [String, Number, Boolean],
      required: false,
      default: () => '',
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
@import '@/assets/styles/components/the-button-toggle.scss';
</style>
