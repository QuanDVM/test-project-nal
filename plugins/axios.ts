import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/axios'

const axios: Plugin = ({ $axios, $cookies, Constants, Utils, $_ }) => {
  $axios.onRequest((config) => {
    const accessToken = $cookies.get(Constants.common.ACCESS_TOKEN_KEY)

    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    if (!$_.isEmpty(config.data)) {
      config.data = Utils.helper.toSnakeCase(config.data)
    }

    if (!$_.isEmpty(config.params)) {
      config.params = Utils.helper.toSnakeCase(config.params)
    }
  })

  $axios.onResponse((res) => {
    return Utils.helper.toCamelCase(res.data)
  })

  $axios.onError((error) => {
    const code = error.response?.status
    const originalRequest = error.config

    console.error(originalRequest.url, code)

    return Promise.reject(error)
  })

  initializeAxios($axios)
}

export default axios
