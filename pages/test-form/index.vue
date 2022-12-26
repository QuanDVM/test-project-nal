<template>
  <div>
    <the-form ref="form" v-model="formValid" class="tw-mt-[54px]">
      <form-item :label="$t('common.fields.email')" required>
        <the-text-field
          v-model="form.email"
          :placeholder="$t('common.fieldsPlaceholder.email')"
          :maxlength="255"
          @blur="validateEmail"
        />
      </form-item>
      <div class="tw-mt-[60px] tw-text-center">
        <the-button :loading="loading" color="primary" @click="submit">{{
          $t('common.action.change')
        }}</the-button>
      </div>
    </the-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestConstants',
  data() {
    return {
      form: {
        sex: true,
        email: 'quandvm@google.com',
      },
      loading: false,
    }
  },

  methods: {
    submit() {},
  },
})
</script>
