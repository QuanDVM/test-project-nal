<template>
  <v-menu class="the-profile-dropdown" :nudge-width="80" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="the-profile-dropdown__info" v-bind="attrs" v-on="on">
        <v-avatar color="grey" size="40px">
          <the-img :src="avatar" alt="" />
        </v-avatar>

        <text-ellipsis inline class="the-profile-dropdown__info__name">{{
          name
        }}</text-ellipsis>

        <v-icon class="tw-text-black">mdi-menu-down</v-icon>
      </div>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in menus"
        :key="index"
        :to="item.url"
        @click.prevent="!!item.callback && item.callback()"
      >
        {{ item.label }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { RawLocation } from 'vue-router'

interface MenuProps {
  url?: RawLocation
  callback?: Function
  label: string
  active?: boolean
}

export default Vue.extend({
  name: 'TheProfileDropdown',

  props: {
    avatar: {
      type: String,
      required: false,
      default: () => '',
    },

    name: {
      type: String,
      required: false,
      default: () => '',
    },

    menus: {
      type: Array as PropType<Array<MenuProps>>,
      required: false,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-profile-dropdown.scss';
</style>
