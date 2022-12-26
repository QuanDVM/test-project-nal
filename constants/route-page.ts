export interface ConstantRoutePageProps {
  BLOG_LIST: string
  BLOG_DETAIL: string
  BLOG_ADD: string
  BLOG_EDIT: string
}

const routePage: ConstantRoutePageProps = {
  BLOG_LIST: '/nals-blog',
  BLOG_DETAIL: '/nals-blog/{id}',
  BLOG_ADD: '/nals-blog/add',
  BLOG_EDIT: '/nals-blog/edit/{id}',
}

export default routePage
