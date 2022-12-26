<template>
  <div class="nals-form-blog">
    <v-card class="nals-form-blog__main">
      <the-form ref="form" v-model="formValid">
        <form-item :label="$t('common.fields.title')" required>
          <the-text-field
            v-model="formBlog.title"
            :maxlength="255"
            :rules="rules.title"
          />
        </form-item>

        <form-item :label="$t('common.fields.content')" required>
          <the-text-area
            v-model="formBlog.content"
            :maxlength="1000"
            :rules="rules.content"
          />
        </form-item>
        <div class="nals-form-blog__action">
          <the-button :loading="loading" color="primary" @click="submit">
            {{ textButton }}
          </the-button>
        </div>
      </the-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Blog } from '@/models/blog'

interface DataProps {
  loading: false
  formValid: false
}

export default Vue.extend({
  name: 'FormBlog',

  props: {
    isAdd: Boolean,
    blog: {
      type: Object as PropType<Blog>,
      required: true,
    },
  },

  data(): DataProps {
    return {
      loading: false,
      formValid: false,
    }
  },

  computed: {
    textButton(): string {
      return this.isAdd
        ? this.$t('common.action.add').toString()
        : this.$t('common.action.edit').toString()
    },

    rules(): any {
      return {
        title: [
          (value: string) =>
            this.Utils.validate.required(
              value,
              this.$t('common.fields.title').toString()
            ),
        ],

        content: [
          (value: string) =>
            this.Utils.validate.required(
              value,
              this.$t('common.fields.content').toString()
            ),
        ],
      }
    },

    formBlog: {
      get(): Blog {
        return this.blog
      },

      set(val: Blog) {
        this.$emit('update:blog', val)
      },
    },
  },

  methods: {
    submit() {
      const refForm = this.$refs.form as any

      refForm.validate()

      if (!this.formValid) return

      this.$emit('submit')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/nals-blog/form-log.scss';
</style>
