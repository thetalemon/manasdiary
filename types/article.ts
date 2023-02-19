type Icon = {
  type: string
  value: string
}

export type Article = {
  _id: string
  icon: Icon
  title: string
  summary: string
  slug: string
  tags: string[]
  publishdate: string[]
}

export type ArticleDetail = Article & {
  body: string
}
