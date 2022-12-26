<template>
  <the-text-field
    :type="show ? 'text' : 'password'"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    v-bind="$attrs"
    v-on="$listeners"
    @click:append="show = !show"
  />
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {
  show: boolean
}

export default Vue.extend({
  name: 'ThePasswordField',

  data(): DataProps {
    return {
      show: false,
    }
  },
})
</script>
