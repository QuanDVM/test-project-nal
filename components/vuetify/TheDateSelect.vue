<template>
  <v-row>
    <v-col cols="12" sm="4">
      <the-select
        v-model="dataYear"
        :items="years"
        item-text="label"
        item-value="value"
        :placeholder="$t('common.fieldsPlaceholder.theDateSelect')"
        :suffix="!hideSuffix ? $t('common.fields.year') : undefined"
        :disabled="disabled"
        :rules="rulesYear"
      />
    </v-col>
    <v-col cols="12" sm="4">
      <the-select
        v-model="dataMonth"
        :items="months"
        item-text="label"
        item-value="value"
        :placeholder="$t('common.fieldsPlaceholder.theDateSelect')"
        :suffix="!hideSuffix ? $t('common.fields.month') : undefined"
        :disabled="disabled"
        :rules="rulesMonth"
      />
    </v-col>
    <v-col cols="12" sm="4">
      <the-select
        v-model="dataDay"
        :items="dates"
        item-text="label"
        item-value="value"
        :placeholder="$t('common.fieldsPlaceholder.theDateSelect')"
        :suffix="!hideSuffix ? $t('common.fields.day') : undefined"
        :disabled="disabled"
        :rules="rulesDay"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { OptionsProps, ObjectProps } from '@/models/types'

export default Vue.extend({
  name: 'TheDateSelect',

  props: {
    yearSize: {
      type: Number,
      required: false,
      default: 1,
    },

    yearStart: {
      type: Number,
      required: false,
      default: new Date().getFullYear(),
    },

    yearRange: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: () => {
        const date = new Date()

        return [date.getFullYear(), date.getFullYear()]
      },
    },

    yearItems: {
      type: Array as PropType<Array<OptionsProps>>,
      required: false,
      default: () => [],
    },

    year: {
      type: Number,
      required: false,
      default: new Date().getFullYear(),
    },

    month: {
      type: Number,
      required: false,
      default: 1,
    },

    day: {
      type: Number,
      required: false,
      default: 1,
    },

    freeDate: Boolean,

    hideSuffix: Boolean,

    disabled: Boolean,

    rulesYear: {
      type: Array as PropType<Array<ObjectProps>>,
      required: false,
      default: () => [],
    },

    rulesMonth: {
      type: Array as PropType<Array<ObjectProps>>,
      required: false,
      default: () => [],
    },

    rulesDay: {
      type: Array as PropType<Array<ObjectProps>>,
      required: false,
      default: () => [],
    },
  },

  computed: {
    dataYear: {
      get(): number {
        return this.year
      },

      set(val: number) {
        this.$emit('update:year', val)
      },
    },

    dataMonth: {
      get(): number {
        return this.month
      },

      set(val: number) {
        this.$emit('update:month', val)
      },
    },

    dataDay: {
      get(): number {
        return this.day
      },

      set(val: number) {
        this.$emit('update:day', val)
      },
    },

    dates(): Array<OptionsProps> {
      if (this.disabled) {
        return [
          {
            value: this.dataDay,
            label: this.dataDay,
          },
        ]
      }

      const date = this.$moment()
        .set({
          month: this.dataMonth - 1,
          year: this.dataYear,
        })
        .startOf('month')

      let range = date.daysInMonth()

      if (
        !this.freeDate &&
        this.year === this.years[this.years.length - 1].value &&
        this.month === this.months[this.months.length - 1].value
      ) {
        range = this.$moment().date()
      } else if (
        this.year === this.years[0].value &&
        this.month === this.months[0].value
      ) {
        range = range - this.$moment().date() + 1
      }

      return Array.from(Array(range).keys()).map((item) => {
        let day = item + 1

        if (
          !this.freeDate &&
          this.year === this.years[0].value &&
          this.month === this.months[0].value
        ) {
          day += this.$moment().date() - 1
        }

        return {
          value: day,
          label: day,
        }
      })
    },

    months(): Array<OptionsProps> {
      if (this.disabled) {
        return [
          {
            value: this.dataMonth,
            label: this.dataMonth,
          },
        ]
      }

      const date = this.$moment()
      const currentYear = date.year()
      const currentMonth = date.month() + 1

      let range = 12

      if (!this.freeDate) {
        if (
          this.year === currentYear ||
          this.year === this.years[this.years.length - 1].value
        ) {
          range = currentMonth
        } else if (this.year === this.years[0].value) {
          range = 12 - currentMonth + 1
        } else if (this.year > currentYear) {
          range = 1
        }
      }

      return Array.from(Array(range).keys()).map((index) => {
        let value = index + 1

        if (!this.freeDate && this.year === this.years[0].value) {
          value += currentMonth - 1
        }

        return {
          value,
          label: value,
        }
      })
    },

    years(): Array<OptionsProps> {
      if (this.disabled) {
        return [
          {
            value: this.dataYear,
            label: this.dataYear,
          },
        ]
      }

      return Array.from(Array(this.yearSize).keys()).map((item) => {
        const year = item + this.yearStart

        return {
          value: year,
          label: year,
        }
      })
    },
  },

  watch: {
    dataMonth() {
      this.resetDay()
    },

    dataYear() {
      this.resetDay()
    },
  },

  methods: {
    /**
     * Reset day when change date
     */
    resetDay() {
      if (!this.dates.map((item) => item.value).includes(this.dataDay)) {
        this.dataDay = this.dates[0].value
      }

      if (!this.months.map((item) => item.value).includes(this.dataMonth)) {
        this.dataMonth = this.months[0].value
      }
    },
  },
})
</script>
