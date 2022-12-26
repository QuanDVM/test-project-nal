import blog, { RepoBlogProps } from '~/repositories/blog'

export type RepositoryProps = {
  blog: RepoBlogProps
}

const repositories: RepositoryProps = {
  blog,
}

export default repositories
