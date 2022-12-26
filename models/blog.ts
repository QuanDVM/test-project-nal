export interface BlogBase {
  title: string
  content: string
  imageUrl: string
}

export interface Blog extends BlogBase {
  id: number
}
