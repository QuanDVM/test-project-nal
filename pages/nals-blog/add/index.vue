<template>
  <div class="nals-blog">
    <the-container>
      <the-heading>{{ $t('nalsBlogAddPage.heading') }}</the-heading>

      <form-blog is-add :blog.sync="form" @submit="add"></form-blog>
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
    async add() {
      try {
        this.loading = true
        await this.$repo.blog.addBlog({
          title: this.form.title,
          content: this.form.content,
          imageUrl: 'https://cdn.tgdd.vn//GameApp/1321010//Talon0-800x450.jpg',
        })

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
