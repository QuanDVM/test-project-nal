<template>
  <v-form ref="form" v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {
  isShowAlert: boolean
}

export default Vue.extend({
  name: 'TheForm',

  props: {
    anchor: {
      type: String,
      required: false,
      default: () => '',
    },
  },

  data(): DataProps {
    return {
      isShowAlert: false,
    }
  },

  methods: {
    validate() {
      this.isShowAlert = false
      const refForm = this.$refs.form as any

      refForm.validate()

      if (!this.$attrs.value) {
        this.isShowAlert = true

        if (this.anchor) {
          const element = document.querySelector(this.anchor)

          if (element) element.scrollIntoView({ block: 'center' })
        } else {
          window.scrollTo(0, 0)
        }
      }
    },

    validateFields(fields: Array<string>) {
      const refForm = this.$refs.form as any
      const inputs = refForm.inputs

      inputs.forEach((input: any) => {
        if (fields.includes(input.$attrs.name)) {
          input.validate(true)
        }
      })
    },

    reset() {
      const refForm = this.$refs.form as any

      refForm.reset()
      this.isShowAlert = false
    },

    resetValidation() {
      const refForm = this.$refs.form as any

      refForm.resetValidation()
      this.isShowAlert = false
    },
  },
})
</script>
