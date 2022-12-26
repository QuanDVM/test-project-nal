<template>
  <div class="nals-blog">
    <the-container>
      <the-heading>{{ $t('nalsBlogEditPage.heading') }}</the-heading>

      <form-blog
        :blog.sync="form"
        :loading="loading"
        @submit="update"
      ></form-blog>
    </the-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Blog } from '@/models/blog'
import FormBlog from '@/components/nals-blog/FormBlog.vue'

interface DataProps {
  form: Blog
  loading: boolean
}

export default Vue.extend({
  name: 'NalsBlogPage',

  components: { FormBlog },

  async asyncData({ $repo, params, error }) {
    try {
      const { data } = await $repo.blog.getDetailBlog(params.id)

      return {
        form: data,
      }
    } catch {
      error({ statusCode: 404 })
    }
  },

  data(): DataProps {
    return {
      form: {
        id: 0,
        title: '',
        content: '',
        imageUrl: '',
      },

      loading: false,
    }
  },

  methods: {
    async update() {
      try {
        this.loading = true
        await this.$repo.blog.updateBlog(this.form.id, this.form)

        this.$router.push(this.Constants.routePage.BLOG_LIST)
      } catch (error: any) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
})
</script>
