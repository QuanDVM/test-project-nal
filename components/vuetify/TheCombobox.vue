<template>
  <v-combobox
    ref="combobox"
    clearable
    dense
    outlined
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
  </v-combobox>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheCombobox',
})
</script>
