import format from 'string-format'
import { $axios, ApiResponse } from '@/utils/axios'
import RouteApi from '@/constants/route-api'
import { Blog, BlogBase } from '@/models/blog'

interface BlogPayload {
  _page: number
  _limit: number
  _sort: string
  _order: string
  q?: string
}

const getBlogList = (payload: BlogPayload) =>
  $axios.get(RouteApi.BLOG, {
    params: payload,
  }) as Promise<ApiResponse<Array<Blog>>>

const addBlog = (payload: BlogBase) =>
  $axios.post(RouteApi.BLOG, payload) as Promise<ApiResponse>

const getDetailBlog = (id: string | number) =>
  $axios.get(format(RouteApi.BLOG_DETAIL, { id })) as Promise<ApiResponse<Blog>>

const updateBlog = (id: string | number, payload: Blog) =>
  $axios.put(
    format(RouteApi.BLOG_DETAIL, { id }),
    payload
  ) as Promise<ApiResponse>

export type RepoBlogProps = {
  getBlogList: (payload: BlogPayload) => Promise<ApiResponse<Array<Blog>>>
  addBlog: (payload: BlogBase) => Promise<ApiResponse>
  getDetailBlog: (id: string | number) => Promise<ApiResponse<Blog>>
  updateBlog: (id: string | number, payload: Blog) => Promise<ApiResponse>
}

const repository: RepoBlogProps = {
  getBlogList,
  addBlog,
  getDetailBlog,
  updateBlog,
}

export default repository
