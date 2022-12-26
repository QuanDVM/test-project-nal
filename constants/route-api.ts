export interface ConstantRouteApiProps {
  BLOG: string
  BLOG_DETAIL: string
}

const routeApi: ConstantRouteApiProps = {
  BLOG: '/blog',
  BLOG_DETAIL: '/blog/{id}',
}

export default routeApi
