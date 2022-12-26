<template>
  <div class="the-date-picker">
    <v-menu
      ref="input"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
      :z-index="zIndex"
    >
      <template #activator="{ on }">
        <the-text-field
          :value="value"
          readonly
          v-bind="$attrs"
          v-on="on"
          @click:clear="onClickClear"
        />
      </template>
      <v-date-picker
        v-model="bindingData"
        :locale="Constants.common.LOCALE"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheDatePicker',

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },

    zIndex: {
      type: Number,
      required: false,
      default: 8,
    },
  },

  computed: {
    bindingData: {
      get(): string {
        return this.value
      },

      set(val: string) {
        this.$emit('input', val)
      },
    },
  },

  methods: {
    onClickClear() {
      this.$emit('input', '')
    },
  },
})
</script>
