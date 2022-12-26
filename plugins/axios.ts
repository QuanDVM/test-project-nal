import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/axios'

const axios: Plugin = ({ $axios, Utils }) => {
  $axios.onResponse((res) => {
    return Utils.helper.toCamelCase(res)
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
