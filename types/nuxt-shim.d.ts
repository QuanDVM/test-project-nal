import { LoDashStatic } from 'lodash'
import { ConstantsProps } from '@/constants'
import { RepositoryProps } from '@/repositories'
import { NuxtCookies } from 'cookie-universal-nuxt'
import { UtilsProps } from '@/utils'
import numeral from 'numeral'

declare module 'vue/types/vue' {
  interface Vue {
    $_: LoDashStatic
    Constants: ConstantsProps
    Utils: UtilsProps
    $cookies: NuxtCookies
    $numeral: typeof numeral
    $repo: RepositoryProps
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  interface Store<S> {
    $_: LoDashStatic
    $cookies: NuxtCookies
    Utils: UtilsProps
    Constants: ConstantsProps
    $repo: RepositoryProps
  }
}

declare module '@nuxt/types' {
  interface Context {
    $_: LoDashStatic
    $cookies: NuxtCookies
    Utils: UtilsProps
    $numeral: typeof numeral
    Constants: ConstantsProps
    $repo: RepositoryProps
  }
}
