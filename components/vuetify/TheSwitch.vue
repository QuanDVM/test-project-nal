<template>
  <v-switch
    v-model="bindingData"
    outlined
    class="the-switch"
    hide-details="auto"
    dense
    inset
    v-bind="$attrs"
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
  </v-switch>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheSwitch',

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
@import '@/assets/styles/components/the-switch.scss';
</style>
