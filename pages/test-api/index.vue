<template>
  <div>
    <p>Show content api:</p>
    <p>{{ contentApi }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {
  contentApi: any
}

export default Vue.extend({
  name: 'TestApi',
  data(): DataProps {
    return {
      contentApi: null,
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const data = await this.$repo.test.testApi()

      this.contentApi = data
    },
  },
})
</script>
