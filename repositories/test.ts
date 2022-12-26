import { $axios, ApiResponse } from '@/utils/axios'
import RouteApi from '@/constants/route-api'

const testApi = () => $axios.get(RouteApi.API_TEST) as Promise<ApiResponse>
const refreshToken = (payload: any) =>
  $axios.get(RouteApi.API_TEST) as Promise<ApiResponse>

export type RepoTestProps = {
  testApi: () => Promise<ApiResponse>
  refreshToken: (payload: any) => Promise<ApiResponse>
}

const repository: RepoTestProps = {
  testApi,
  refreshToken,
}

export default repository
