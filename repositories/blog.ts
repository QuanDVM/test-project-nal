import format from 'string-format'
import { $axios, ApiResponse } from '@/utils/axios'
import RouteApi from '@/constants/route-api'
import { Blog } from '@/models/blog'

interface BlogPayload {
  _page: number
  _limit: number
}

const getBlogList = (payload: BlogPayload) =>
  $axios.get(RouteApi.BLOG, {
    params: payload,
  }) as Promise<ApiResponse<Array<Blog>>>

const addBlog = (payload: Blog) =>
  $axios.post(RouteApi.BLOG, payload) as Promise<ApiResponse>

const getDetailBlog = (id: string | number) =>
  $axios.get(format(RouteApi.BLOG_DETAIL, { id })) as Promise<ApiResponse<Blog>>

export type RepoBlogProps = {
  getBlogList: (payload: BlogPayload) => Promise<ApiResponse<Array<Blog>>>
  addBlog: (payload: Blog) => Promise<ApiResponse>
  getDetailBlog: (id: string | number) => Promise<ApiResponse<Blog>>
}

const repository: RepoBlogProps = {
  getBlogList,
  addBlog,
  getDetailBlog,
}

export default repository
