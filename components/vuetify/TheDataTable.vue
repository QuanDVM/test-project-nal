<template>
  <client-only>
    <div class="the-data-table">
      <div v-if="!hideAction" class="the-data-table__action">
        <slot name="action-prefix" />
        <div class="the-data-table__action__left">
          <div
            v-if="hasBulkAction"
            class="the-data-table__action__bulk-operation"
          >
            <span class="the-data-table__action__label">{{
              $t('common.table.bulkOperation')
            }}</span>

            <the-select
              v-model="bulkActionValue"
              :items="bulkActions"
              item-text="label"
              item-value="value"
              class="the-data-table__action__bulk-operation__select"
            />
          </div>

          <slot name="action-left" />
        </div>
        <div class="the-data-table__action__right">
          <slot name="action-right" />
          <span class="the-data-table__action__label">{{
            $t('common.table.numberOfSearchResults', {
              total: Utils.helper.formatNumber(total),
            })
          }}</span>
          <the-select
            v-model="limit"
            class="the-data-table__action__page-size"
            :items="pageSizes"
            item-text="label"
            item-value="value"
          />
        </div>
      </div>

      <div class="tw-mt-6">
        <v-data-table
          :class="[
            'the-data-table__table',
            { clickable: !!$listeners['click:row'] },
          ]"
          :page.sync="page"
          :no-data-text="$t('common.messages.noData')"
          loading-text=""
          :items-per-page="limit"
          hide-default-footer
          :mobile-breakpoint="0"
          :show-select="hasBulkAction"
          v-bind="$attrs"
          v-on="$listeners"
        >
          <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
          <template
            v-for="(_, name) in $scopedSlots"
            :slot="name"
            slot-scope="slotData"
          >
            <slot :name="name" v-bind="slotData" />
          </template>
        </v-data-table>
      </div>

      <div v-if="!hidePagination" class="tw-mt-6">
        <v-pagination
          v-model="page"
          :length="paginationLength"
          :total-visible="pagerCount"
        />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { OptionsProps } from '@/models/types'

interface DataProps {
  bulkActionValue: any
  pageSizes: Array<OptionsProps>
}

export default Vue.extend({
  name: 'TheDataTable',

  props: {
    total: {
      type: Number,
      required: false,
      default: 0,
    },

    bulkActions: {
      type: Array as PropType<Array<OptionsProps>>,
      required: false,
      default: () => [],
    },

    bulkValue: {
      type: [String, Boolean, Number],
      required: false,
      default: () => '',
    },

    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },

    pagerCount: {
      type: Number,
      required: false,
      default: 7,
    },

    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },

    hidePagination: Boolean,

    hideAction: Boolean,
  },

  data(): DataProps {
    return {
      bulkActionValue: this.bulkValue || '',
      pageSizes: this.Constants.common.PAGE_SIZES.map((val) => ({
        value: val,
        label: this.$t('common.table.pageSize', { size: val }),
      })),
    }
  },

  computed: {
    hasBulkAction(): boolean {
      return !!this.bulkActions?.length
    },

    paginationLength(): number {
      return Math.ceil(this.total / this.limit)
    },

    limit: {
      get(): number {
        return this.pageSize
      },

      set(val: number) {
        this.$emit('update:pageSize', val)
      },
    },

    page: {
      get(): number {
        return this.currentPage
      },

      set(val: number) {
        this.$emit('update:currentPage', val)
      },
    },
  },

  watch: {
    bulkActionValue(val) {
      this.$emit('bulk-action-change', val)
    },

    bulkValue(val) {
      this.bulkActionValue = val
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-data-table.scss';
</style>
