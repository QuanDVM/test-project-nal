<template>
  <div>
    <div>
      <a @click.stop="shareFacebookDialog">Share Facebook</a>
    </div>
    <div>
      <a>Share Twitter</a>
    </div>
    <div>
      <a>Share Line</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ShareSocial',

  computed: {
    facebookShareLink(): string {
      return `${this.$config.fbShareLink}?u=https://www.w3schools.com/`
    },
  },
  created() {},
  methods: {
    shareFacebookDialog() {
      window.open(
        this.facebookShareLink,
        '_blank',
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'
      )
    },
  },
})
</script>
