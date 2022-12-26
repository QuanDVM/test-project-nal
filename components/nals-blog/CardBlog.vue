<template>
  <v-card class="nals-card-blog">
    <v-img height="200px" :src="item.imageUrl" class="nals-card-blog__image">
      <text-ellipsis inline class="nals-card-blog__title text-white">{{
        item.title
      }}</text-ellipsis>
    </v-img>

    <v-card-text class="text--primary">
      <div class="nals-card-blog__content">
        <text-ellipsis inline :rows="3">{{ item.content }}</text-ellipsis>
      </div>
    </v-card-text>

    <v-card-actions>
      <the-button color="primary" inline @click="goToDetail(item.id || 0)">{{
        $t('common.action.detail')
      }}</the-button>

      <the-button
        color="primary"
        inline
        outlined
        @click="goToUpdate(item.id || 0)"
        >{{ $t('common.action.edit') }}</the-button
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Blog } from '@/models/blog'

export default Vue.extend({
  name: 'NalsCardBlog',

  props: {
    item: {
      type: Object as PropType<Blog>,
      required: true,
    },
  },

  methods: {
    goToDetail(id: number) {
      if (!id) return

      this.$router.push(
        this.$format(this.Constants.routePage.BLOG_DETAIL, { id })
      )
    },

    goToUpdate(id: number) {
      if (!id) return

      this.$router.push(
        this.$format(this.Constants.routePage.BLOG_EDIT, { id })
      )
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/nals-blog/card-blog.scss';
</style>
