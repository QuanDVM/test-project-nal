<template>
  <div>
    <div class="a a__b">{{ $t('appName') }}</div>
    <the-chat />

    <the-chart />
  </div>
</template>

<script>
import TheChat from '@/components/TheChat.vue'
import TheChart from '@/components/TheChart.vue'

export default {
  name: 'IndexPage',
  components: { TheChat, TheChart },
  created() {},
}
</script>
