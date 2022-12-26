<template>
  <v-app light>
    <div class="layout-default">
      <nuxt />
    </div>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/layout/default/index.scss';
</style>
