<template>
  <div>
    <v-checkbox
      v-model="bindingData"
      :class="['the-checkbox', `the-checkbox--position-${position}`]"
      hide-details="auto"
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
    </v-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheCheckbox',

  model: {
    prop: 'bindingValue',
    event: 'input',
  },

  props: {
    bindingValue: {
      type: [String, Number, Boolean, Array],
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
      get(): any {
        return this.bindingValue
      },

      set(val: any) {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-checkbox.scss';
</style>
