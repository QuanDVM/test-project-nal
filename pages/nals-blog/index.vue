<template>
  <div class="nals-blog">
    <the-container>
      <the-heading class="tw-mt-[36px]">{{
        $t('nalsBlogPage.heading')
      }}</the-heading>

      <div>
        <the-form ref="form" class="tw-mt-6">
          <the-text-field
            v-model="form.search"
            :maxlength="255"
            @input="search"
          />
        </the-form>
      </div>

      <div class="nals-blog__action">
        <the-button color="primary" @click="goToAdd">{{
          $t('common.action.add')
        }}</the-button>

        <div class="nals-blog__sort">
          <the-select
            v-model="sortSelected"
            :items="sorts"
            @change="searchBysort"
          />
        </div>
      </div>
      <v-card class="nals-blog__main">
        <v-row v-if="loading">
          <v-col cols="12" sm="4">
            <v-skeleton-loader
              class="mx-auto"
              type="image, list-item-three-line"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-for="blog in blogs" :key="blog.id" cols="12" sm="4">
            <card-blog :item="blog" />
          </v-col>
        </v-row>

        <div class="tw-mt-6">
          <v-pagination
            v-model="pageInfo.currentPage"
            :length="paginationLength"
            :total-visible="pageInfo.total"
          />
        </div>
      </v-card>
    </the-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Blog } from '@/models/blog'
import { OptionsProps } from '@/models/types'

import CardBlog from '@/components/nals-blog/CardBlog.vue'

interface DataProps {
  blogs: Array<Blog>
  form: {
    search: string
  }
  sorts: Array<OptionsProps>
  sortSelected: string

  pageInfo: {
    total: number
    limit: number
    currentPage: number
  }

  loading: boolean
}

export default Vue.extend({
  name: 'NalsBlogPage',
  components: { CardBlog },
  data(): DataProps {
    return {
      blogs: [],

      form: {
        search: '',
      },

      sorts: [
        {
          value: this.Constants.common.SORT_ORDER.ASC,
          text: 'last',
        },
        {
          value: this.Constants.common.SORT_ORDER.DESC,
          text: 'new',
        },
      ],

      sortSelected: this.Constants.common.SORT_ORDER.ASC,
      pageInfo: {
        total: 10,
        limit: 5,
        currentPage: 1,
      },

      loading: true,
    }
  },

  computed: {
    paginationLength(): number {
      return Math.ceil(this.pageInfo.total / this.pageInfo.limit)
    },
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        this.loading = true
        const data = (await this.$repo.blog.getBlogList({
          _page: this.pageInfo.currentPage,
          _limit: this.pageInfo.limit,
        })) as any

        console.log(data)
        this.blogs = data
      } catch (error: any) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async search() {},

    goToAdd() {
      this.$router.push(this.Constants.routePage.BLOG_ADD)
    },

    searchBysort() {},
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/nals-blog/index.scss';
</style>
