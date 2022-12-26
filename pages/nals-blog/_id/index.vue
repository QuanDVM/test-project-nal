<template>
  <div class="nals-blog-detail">
    <the-container>
      <the-card class="nals-blog-detail__main">
        <the-heading>{{ blog.title }}</the-heading>

        <p>{{ blog.content }}</p>
      </the-card>
    </the-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Blog } from '@/models/blog'

interface DataProps {
  blog: Blog
}

export default Vue.extend({
  name: 'NalsBlogDetailPage',

  async asyncData({ $repo, params, error }) {
    try {
      const { data } = await $repo.blog.getDetailBlog(params.id)

      return {
        blog: data,
      }
    } catch {
      error({ statusCode: 404 })
    }
  },

  data(): DataProps {
    return {
      blog: {
        id: 0,
        title: '',
        content: '',
        imageUrl: '',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/nals-blog/detail/index.scss';
</style>
