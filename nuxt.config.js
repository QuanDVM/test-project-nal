import fs from 'fs'
import path from 'path'
import colors from 'vuetify/es5/util/colors'
import Constants from './constants'

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: '%s - text-build-project-vuex-type-script-vuetify',
    title: 'text-build-project-vuex-type-script-vuetify',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/apexchart', ssr: false },
    '@/plugins/lodash',
    '@/plugins/constants',
    '@/plugins/numeral',
    '@/plugins/utils',
    '@/plugins/repositories',
    '@/plugins/axios',
  ],

  styleResources: {
    scss: ['~/assets/styles/base/mixins.scss'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  moment: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/firebase',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyD8t6WRADPJswpMNpIwd_lbeCHXBcvJPpU',
      authDomain: 'vue-firebase-chat-d8059.firebaseapp.com',
      projectId: 'vue-firebase-chat-d8059',
      storageBucket: 'vue-firebase-chat-d8059.appspot.com',
      messagingSenderId: '468609987635',
      appId: '1:468609987635:web:6f77cb9a2ef2f7063a5f46',
      measurementId: 'G-Q75VZ12NJW',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },

  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
    baseUrl: '/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_APP_BASE_URL_API,
  },

  publicRuntimeConfig: {
    fbShareLink: process.env.NUXT_APP_FACEBOOK_SHARE_LINK,
    twShareLink: process.env.NUXT_APP_TWITTER_SHARE_LINK,
    lineShareLink: process.env.NUXT_APP_LINE_SHARE_LINK,
    appURL: process.env.NUXT_APP_BASE_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/base/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
