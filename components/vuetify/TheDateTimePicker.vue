<template>
  <div class="the-date-time-picker">
    <v-dialog v-model="dateTimeDialog" max-width="290px" min-width="290px">
      <template #activator="{ on }">
        <the-text-field
          v-model="inputValue"
          readonly
          v-bind="$attrs"
          v-on="on"
          @click:append="openDialog"
        />
      </template>
      <v-card>
        <v-toolbar height="36" color="primary" dark flat>
          <v-tabs v-model="tab" grow height="36">
            <v-tabs-slider color="white" />
            <v-tab href="#date">
              <v-icon>mdi-calendar</v-icon>
            </v-tab>
            <v-tab href="#time">
              <v-icon>mdi-clock</v-icon>
            </v-tab>
            <v-btn depressed text class="rounded-0" @click="closeDialog">
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item value="date">
            <v-date-picker
              v-model="form.date"
              class="rounded-0"
              full-width
              :allowed-dates="allowDate"
              @input="tab = 'time'"
            />
          </v-tab-item>
          <v-tab-item value="time">
            <v-time-picker
              :key="tab"
              v-model="form.time"
              format="24hr"
              class="rounded-0"
              full-width
              @click:minute="closeDialog"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {
  form: {
    date: string
    time: string
  }
  tab: string
  dateTimeDialog: boolean
}

export default Vue.extend({
  name: 'TheDatePicker',

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },

    allowDate: {
      type: Function,
      required: false,
      default: () => ({}),
    },
  },

  data(): DataProps {
    return {
      form: {
        date: '',
        time: '',
      },

      tab: '',
      dateTimeDialog: false,
    }
  },

  computed: {
    inputValue: {
      get(): string {
        return this.value ? this.Utils.helper.formatDateTime(this.value) : ''
      },

      set(val: string) {
        this.$emit('input', val)
      },
    },
  },

  watch: {
    value: {
      handler(val: string) {
        if (val) {
          const dateFormat = this.Utils.helper.formatDateTimeHypen(val)

          this.inputValue = this.Utils.helper.formatDateTime(val)
          const [date, time] = dateFormat.split(' ')

          this.form = {
            date,
            time,
          }
        }
      },

      immediate: true,
    },
  },

  methods: {
    openDialog() {
      this.dateTimeDialog = true
    },

    closeDialog() {
      this.dateTimeDialog = false

      if (!this.form.date) return

      const date = this.$moment(this.form.date)
      const [hour, minute] = this.form.time.split(':')

      date.set({
        hour: Number(hour || '0'),
        minute: Number(minute || '0'),
      })
      this.inputValue = this.Utils.helper.formatDateTime(date.valueOf())
      this.$emit('input', this.Utils.helper.formatDateTime(date.valueOf()))
    },
  },
})
</script>
