import test, { RepoTestProps } from '@/repositories/test'

export type RepositoryProps = {
  test: RepoTestProps
}

const repositories: RepositoryProps = {
  test,
}

export default repositories
