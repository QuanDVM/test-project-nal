<template>
  <div class="nals-blog">
    <the-container>
      <the-heading>{{ $t('nalsBlogEditPage.heading') }}</the-heading>

      <form-blog :blog.sync="form" @submit="update"></form-blog>
    </the-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Blog } from '@/models/blog'
import FormBlog from '@/components/nals-blog/FormBlog.vue'

interface DataProps {
  form: Blog
}

export default Vue.extend({
  name: 'NalsBlogPage',

  components: { FormBlog },
  data(): DataProps {
    return {
      form: {
        id: 0,
        title: '',
        content: '',
        imageUrl: '',
      },
    }
  },

  methods: {
    async update() {
      await this.$repo.blog.updateBlog()
    },
  },
})
</script>
