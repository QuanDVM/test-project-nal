import { NuxtAxiosInstance } from '@nuxtjs/axios'

export interface ApiResponse<T = any> {
  meta: {
    [key: string]: any
  }
  data: T
}

let $axios: NuxtAxiosInstance

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
}

export { $axios }
