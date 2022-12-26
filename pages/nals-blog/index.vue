<template>
  <div class="nals-blog">
    <the-container>
      <the-heading>{{ $t('nalsBlogPage.heading') }}</the-heading>

      <div>
        <the-form ref="form" class="mt-6">
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
            v-model="orderSelected"
            :items="orders"
            @change="search"
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

        {{ paginationLength }}
        <div v-if="paginationLength" class="nals-blog__main">
          <v-pagination
            v-model="pageInfo.currentPage"
            :length="paginationLength"
            :total-visible="pageInfo.total"
            @change="fetchData"
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
  orders: Array<OptionsProps>
  orderSelected: string

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

      orders: [
        {
          value: this.Constants.common.SORT_ORDER.ASC,
          text: 'old',
        },
        {
          value: this.Constants.common.SORT_ORDER.DESC,
          text: 'last',
        },
      ],

      orderSelected: this.Constants.common.SORT_ORDER.DESC,
      pageInfo: {
        total: this.Constants.common.PAGE_DEFAULT.TOTAL,
        limit: this.Constants.common.PAGE_DEFAULT.LIMIT,
        currentPage: this.Constants.common.PAGE_DEFAULT.CURRENT_PAGE,
      },

      loading: true,
    }
  },

  computed: {
    paginationLength(): number {
      return Math.ceil(this.pageInfo.total / this.pageInfo.limit)
    },
  },

  watch: {
    'pageInfo.currentPage': {
      handler() {
        this.fetchData()
      },
    },
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      try {
        this.loading = true
        const { data, headers } = (await this.$repo.blog.getBlogList({
          _page: this.pageInfo.currentPage,
          _limit: this.pageInfo.limit,
          _sort: this.Constants.common.BLOG.SORT_BY,
          _order: this.orderSelected,
          ...(this.form.search && { q: this.form.search }),
        })) as any

        console.log(this.pageInfo.total)

        this.pageInfo = {
          ...this.pageInfo,
          ...{
            total: Number(headers.xTotalCount),
            limit: this.Constants.common.PAGE_DEFAULT.LIMIT,
          },
        }

        this.blogs = data
      } catch (error: any) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async search() {
      await this.fetchData()

      this.pageInfo = {
        ...this.pageInfo,
        ...{
          limit: this.Constants.common.PAGE_DEFAULT.LIMIT,
          currentPage: this.Constants.common.PAGE_DEFAULT.CURRENT_PAGE,
        },
      }
    },

    goToAdd() {
      this.$router.push(this.Constants.routePage.BLOG_ADD)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/nals-blog/index.scss';
</style>
